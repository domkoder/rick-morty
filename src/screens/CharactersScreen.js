import React from 'react'
import axios from 'axios'
import CharacterCard from '../components/CharacterCard'
import {Spinner} from '../components/lib'
// import {useFetchInfinite} from '../utils/hooks'

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

function CharactersScreen({onDelete, favorites, onAdd}) {
  const [pageNumber, setPageNumber] = React.useState(1)

  // const {loading, error, characters, hasMore} = useFetchInfinite(
  //   favorites,
  //   `character/?page=${pageNumber}`,
  // )

  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)
  const [characters, setCharacters] = React.useState([])
  const [hasMore, setHasMore] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    // setError(false)
    axios({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/character/?page=${pageNumber}`,
    })
      .then(({data}) => {
        data.results.map(result => {
          return (result.isFavorite = favorites.find(({id}) => id === result.id)
            ? 'true'
            : 'false')
        })

        console.log('data.results:', data.results)

        setCharacters(previousCharacter => {
          return [...previousCharacter, ...data.results]
        })
        setHasMore(data.results.length > 0)
        setLoading(false)
      })
      .catch(error => {
        setError(true)
        setLoading(false)
        console.log(error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber])

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
          setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [hasMore, loading],
  )

  return (
    <div>
      <div className="text-container">
        <p>Welcome to the character page.</p>
        <p>Here, let me load a few characters for you...</p>
        <p>Here you go! Find more characters with the search bar above.</p>
      </div>
      {characters?.length ? (
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
      ) : null}

      {error ? (
        <div className="danger">
          <p>There was an error:</p>
          <pre>{error.error}</pre>
        </div>
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

export default CharactersScreen
