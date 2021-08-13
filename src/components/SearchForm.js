import React from 'react'
import {Spinner} from '../components/lib'
import {FaSearch, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function SearchForm({handleSearchSubmit, isLoading, isError}) {
  const [value, setValue] = React.useState('')
  return (
    <div className="search">
      <form className="search-form">
        <input
          className="search-form__input"
          placeholder="Search characters..."
          id="search"
          type="search"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <label
          className="search-form__label"
          htmlFor="search"
          data-state="tooltip-hidden"
          data-reach-tooltip-trigger=""
        >
          <Link
            to="/search"
            onClick={() => {
              handleSearchSubmit(value)
              setValue('')
            }}
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
          </Link>
        </label>
      </form>
    </div>
  )
}

export default SearchForm
