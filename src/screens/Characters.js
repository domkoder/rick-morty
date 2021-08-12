import React from 'react'
import {client} from '../utils/client'
import {useAsync} from '../utils/hooks'
import CharacterCard from '../components/CharacterCard'

function CharactersScreen({onDelete}) {
  const {data, error, run, isLoading, isError, isSuccess} = useAsync()
  const [pageNumber, setPageNumber] = React.useState('')

  React.useEffect(() => {
    run(client(`character`))
  }, [run])

  return (
    <div>
      {/* <div className="search"></div> */}

      <div className="text-container">
        <p>Welcome to the character page.</p>
        <p>Here, let me load a few characters for you...</p>
        <p>Here you go! Find more characters with the search bar above.</p>
      </div>

      {isError ? (
        <div className="danger">
          <p>There was an error:</p>
          <pre>{error.error}</pre>
        </div>
      ) : null}

      {isSuccess ? (
        data?.results?.length ? (
          <ul className="character-list">
            {data.results.map(character => (
              <CharacterCard character={character} onDelete={onDelete} />
            ))}
          </ul>
        ) : (
          <p>No character found. Try another search.</p>
        )
      ) : null}
    </div>
  )
}

export {CharactersScreen}
