import React from 'react'
import {FaSearch, FaTimes} from 'react-icons/fa'
import {client} from '../utils/client'
import {Spinner} from '../components/lib'
import {useAsync} from '../utils/hooks'

function SearchScreen() {
  const {data, error, run, isLoading, isError, isSuccess} = useAsync()
  const [query, setQuery] = React.useState()
  const [queried, setQueried] = React.useState(false)
  const [pageNumber, setPageNumber] = React.useState('')
  const [hasMore, setHasMore] = React.useState(false)

  React.useEffect(() => {
    if (!queried) {
      return
    }
    run(client(`character?name=${encodeURIComponent(query)}`))
  }, [queried, query, run])

  function handleSearchSubmit(event) {
    event.preventDefault()
    setQueried(true)
    setQuery(event.target.elements.search.value)
  }

  return (
    <div>
      <div className="search">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            className="search-form__input"
            placeholder="Search characters..."
            id="search"
            type="search"
          />
          <label
            className="search-form__label"
            htmlFor="search"
            data-state="tooltip-hidden"
            data-reach-tooltip-trigger=""
          >
            <button className="search-form__button" type="submit">
              {isLoading ? (
                <Spinner />
              ) : isError ? (
                <FaTimes aria-label="error" className="danger" />
              ) : (
                <FaSearch aria-label="search" />
              )}
            </button>
          </label>
        </form>
      </div>

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
              <li key={character.id} aria-label={character.name}>
                <div className="card profile">
                  <a
                    className="profile__body"
                    href={`/character/${character.id}`}
                  >
                    <figure className="profile__figure">
                      <img
                        className="profile__image"
                        src={`${character.image}`}
                        alt={`${character.name}`}
                      />
                    </figure>
                    <div className="profile__info">
                      <h2 id="" className="profile__header">
                        {`${character.name}`}
                      </h2>
                      <div className="">status: {`${character.status}`}</div>
                      <div className="">gender: {`${character.gender}`}</div>
                      <div className="">species: {`${character.species}`}</div>
                    </div>
                  </a>
                  <footer className="profile__footer">
                    <button
                      className="profile__action"
                      aria-label="Add to list"
                      data-state="tooltip-hidden"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z"></path>
                      </svg>
                    </button>
                  </footer>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No character found. Try another search.</p>
        )
      ) : null}
    </div>
  )
}

export {SearchScreen}
