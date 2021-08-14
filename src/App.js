import './App.css'
import React from 'react'
import {useLocalStorageState} from './utils/hooks'
import Main from './layout/Main'
import Aside from './layout/Aside'

function App() {
  const [query, setQuery] = React.useState('')
  const [queried, setQueried] = React.useState(false)
  const [filters, setFilters] = useLocalStorageState('filters', {})
  const [favorites, setFavorites] = useLocalStorageState('favorites-list', [])

  function handleChangeFilters({target}) {
    // const filtersCopy = [...filters]
    setFilters({...filters, [target.name]: target.value})
  }

  // handle search form submit
  function handleSearchSubmit(value) {
    setQueried(true)
    setQuery(value)
  }

  // Delete from favorite list
  const deleteFavorite = id => {
    setFavorites(favorites.filter(favorite => favorite.id !== parseInt(id)))
  }

  // Add to favorite list
  const addFavorite = character => {
    const newFavorite = {...character, isFavorite: 'true'}
    setFavorites([newFavorite, ...favorites])
  }

  return (
    <div className="container">
      <Aside handleChangeFilters={handleChangeFilters} filters={filters} />
      <Main
        onDelete={deleteFavorite}
        onAdd={addFavorite}
        favorites={favorites}
        handleSearchSubmit={handleSearchSubmit}
        query={query}
        queried={queried}
        filters={filters}
      />
    </div>
  )
}
export default App
