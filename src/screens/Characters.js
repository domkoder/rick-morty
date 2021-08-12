import React from 'react'
import axios from 'axios'
import CharacterCard from '../components/CharacterCard'
import {Spinner} from '../components/lib'

function CharactersScreen({onDelete}) {
  // const [status, setStatus] = React.useState({})
  // const [characters, setCharacters] = React.useState([])
  // const [error, setError] = React.useState(false)
  const [pageNumber, setPageNumber] = React.useState(0)
  // const [hasMore, setHasMore] = React.useState(false)

  // const isLoading = status === 'pending'
  // const isError = status === 'rejected'
  // const isSuccess = status === 'resolved'

  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [characters, setCharacters] = React.useState([])
  const [hasMore, setHasMore] = React.useState(false)

  React.useEffect(() => {
    setLoading(true)
    setError(false)
    axios({
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character',
      params: {page: pageNumber},
    })
      .then(response => {
        setCharacters(previousCharacter => {
          return [...previousCharacter, ...response.data.results]
        })
        setHasMore(response.data.results.length > 0)
        setLoading(false)
      })
      .catch(error => {
        setError(true)
      })
  }, [pageNumber])

  const observer = React.useRef()
  const lastCharacterElementRef = React.useCallback(
    node => {
      console.log(node)
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
                  ref={lastCharacterElementRef}
                  key={character.id}
                  aria-label={character.name}
                >
                  <CharacterCard character={character} onDelete={onDelete} />
                </li>
              )
            } else {
              return (
                <li key={character.id} aria-label={character.name}>
                  <CharacterCard character={character} onDelete={onDelete} />
                </li>
              )
            }
          })}
        </ul>
      ) : (
        <p>No character found. Try another search.</p>
      )}

      {error ? (
        <div className="danger">
          <p>There was an error:</p>
          <pre>{error.error}</pre>
        </div>
      ) : null}

      {loading ? (
        <Spinner
          style={{
            display: 'block',
            margin: 'auto',
            // alginItems: 'center',
          }}
        />
      ) : null}
    </div>
  )
}

export {CharactersScreen}
