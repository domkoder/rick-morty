import React from 'react'
import axios from 'axios'
import CharacterCard from '../components/CharacterCard'
import {Spinner} from '../components/lib'

const loadingCharacter = {
  image: '../../cover-image.svg',
  name: 'Loading...',
  status: 'loading...',
  species: 'loading...',
  gender: 'Loading...',
  loadingCharacter: true,
}

const loadingCharacters = Array.from({length: 20}, (v, index) => ({
  id: `loading-book-${index}`,
  ...loadingCharacter,
}))

function SearchScreen({query, queried, favorites, onDelete, onAdd}) {
  // const {data, error, run, isLoading, isError, isSuccess} = useAsync()

  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [characters, setCharacters] = React.useState([])
  const [hasMore, setHasMore] = React.useState(false)
  const [pageNumber, setPageNumber] = React.useState(1)

  React.useEffect(() => {
    setCharacters([])
    setPageNumber(1)
  }, [query])

  React.useEffect(() => {
    setLoading(true)
    setError(false)
    console.log('query:', query)
    axios({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${encodeURIComponent(
        query,
      )}`,
    })
      .then(({data}) => {
        data.results.map(result => {
          return (result.isFavorite = favorites.find(({id}) => id === result.id)
            ? 'true'
            : 'false')
        })

        setCharacters(previousCharacter => {
          return [...previousCharacter, ...data.results]
        })
        console.log('data.results.length:', data.results.length)
        setHasMore(data.results.length > 20)
        setLoading(false)
      })
      .catch(error => {
        setError(true)
        setLoading(false)
        console.log(error)
      })
  }, [pageNumber, query])

  const changeIsFavorite = (id, isFavorite) => {
    setCharacters(
      characters.map(character =>
        character.id === id
          ? {...character, isFavorite: isFavorite}
          : character,
      ),
    )
  }

  const observer = React.useRef()
  const lastCharacterElementRef = React.useCallback(
    node => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          // console.log(hasMore)
          setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [hasMore, loading],
  )

  return (
    <div>
      {error ? (
        <div className="danger">
          <p>There was an error:</p>
          <pre>{error.error}</pre>
        </div>
      ) : null}

      {!loading ? (
        characters?.length ? (
          <ul className="character-list">
            {characters.map((character, index) => {
              if (characters.length === index + 1) {
                return (
                  <li
                    key={`${character.id}`}
                    ref={lastCharacterElementRef}
                    aria-label={character.name}
                  >
                    <CharacterCard
                      character={character}
                      favorites={favorites}
                      onDelete={onDelete}
                      onAdd={onAdd}
                      changeIsFavorite={changeIsFavorite}
                    />
                  </li>
                )
              } else {
                return (
                  <li key={character.id} aria-label={character.name}>
                    <CharacterCard
                      character={character}
                      favorites={favorites}
                      onDelete={onDelete}
                      onAdd={onAdd}
                      changeIsFavorite={changeIsFavorite}
                      cardType="test"
                    />
                  </li>
                )
              }
            })}
          </ul>
        ) : (
          <p>No character found. Try another search.</p>
        )
      ) : null}

      {loading ? (
        <div>
          <Spinner className="spinner-center" />
          <ul className="character-list">
            {loadingCharacters.map((character, index) => (
              <li key={character.id} aria-label={character.name}>
                <CharacterCard character={character} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default SearchScreen
