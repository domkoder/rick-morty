import * as React from 'react'
import {client} from './client'
import axios from 'axios'

const apiURL = `https://rickandmortyapi.com/api/character`

// Set state to local storage with this hooks
function useLocalStorageState(
  key,
  defaultValue = '',
  {serialize = JSON.stringify, deserialize = JSON.parse} = {},
) {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage)
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue
  })

  const prevKeyRef = React.useRef(key)

  React.useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(state))
  }, [key, state, serialize])

  return [state, setState]
}

// fetch characters for infinite scrolling
function useFetchInfinite({
  favorites,
  endpoint = '',
  pageNumber,
  filters,
  query = '',
  setPageNumber,
}) {
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [characters, setCharacters] = React.useState([])
  const [hasMore, setHasMore] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState(null)

  React.useEffect(() => {
    setCharacters([])
    setPageNumber(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, filters.status, filters.gender, filters.species])

  React.useEffect(() => {
    setLoading(true)
    setError(false)
    client(`/?page=${pageNumber}`, filters)
      .then(({data}) => {
        console.log('data:', data)

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
      .catch(errorResponse => {
        setError(true)
        console.log('errorResponse:', errorResponse)
        setLoading(false)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, pageNumber, filters.status, filters.gender, filters.species])

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [error, hasMore, loading],
  )

  return {
    loading,
    errorMessage,
    error,
    characters,
    hasMore,
    changeIsFavorite,
    lastCharacterElementRef,
  }
}

// fetch a single character
function useFetchCharacter(favorites, endpoint) {
  const [character, setCharacter] = React.useState(null)
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiURL}/${endpoint}`,
    })
      .then(({data}) => {
        data.isFavorite = favorites.find(({id}) => id === data.id)
          ? true
          : false
        setCharacter(data)
      })
      .catch(error => {
        setError(true)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint])
  return {error, character}
}

export {useLocalStorageState, useFetchInfinite, useFetchCharacter}
