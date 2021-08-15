import React from 'react'
import axios from 'axios'
import CharacterCardList from '../components/CharacterCardList'
import LoadingCharacters from '../components/LoadingCharacters'
import Error from '../components/Error'
// import {useFetchInfinite} from '../utils/hooks'

function SearchScreen({query, queried, favorites, onDelete, onAdd, filters}) {
  // const {loading, error, characters, hasMore} = useFetchInfinite(
  //   favorites,
  //   `character/?page=${pageNumber}`,
  // )

  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [characters, setCharacters] = React.useState([])
  const [hasMore, setHasMore] = React.useState(false)
  const [pageNumber, setPageNumber] = React.useState(1)

  React.useEffect(() => {
    setCharacters([])
    setPageNumber(1)
  }, [query, filters.status, filters.gender, filters.species])

  React.useEffect(() => {
    if (!query) {
      return
    }

    setLoading(true)
    setError(false)
    axios({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${encodeURIComponent(
        query,
      )}`,
      params: filters,
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
        setHasMore(data.results.length >= 20)
        setLoading(false)
      })
      .catch(error => {
        setError(true)
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, query, filters.status, filters.gender, filters.species])

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
      if (loading || error) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPageNumber => prevPageNumber + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [error, hasMore, loading],
  )

  return (
    <div>
      {!loading ? (
        characters?.length ? (
          <CharacterCardList
            onDelete={onDelete}
            favorites={favorites}
            onAdd={onAdd}
            characters={characters}
            lastCharacterElementRef={lastCharacterElementRef}
            changeIsFavorite={changeIsFavorite}
          />
        ) : (
          <p>No character found. Try another search.</p>
        )
      ) : null}

      {loading ? <LoadingCharacters /> : null}
      {error ? <Error error={error} /> : null}
    </div>
  )
}

export default SearchScreen
