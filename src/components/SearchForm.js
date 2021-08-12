import React from 'react'
import {Spinner} from '../components/lib'
import {FaSearch, FaTimes} from 'react-icons/fa'

function SearchForm({isLoading, isError}) {
  const [query, setQuery] = React.useState()
  const [queried, setQueried] = React.useState(false)

  function handleSearchSubmit(event) {
    event.preventDefault()
    setQueried(true)
    setQuery(event.target.elements.search.value)
  }

  return (
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
  )
}

export default SearchForm
