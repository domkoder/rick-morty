import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import CharactersScreen from '../screens/CharactersScreen'
import CharacterScreen from '../screens/CharacterScreen'
import SearchScreen from '../screens/SearchScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import NotFoundScreen from '../screens/NotFoundScreen'
import SearchForm from '../components/SearchForm'

function Main({
  onDelete,
  onAdd,
  favorites,
  handleSearchSubmit,
  query,
  queried,
  handleChangeFilters,
  filters,
}) {
  return (
    <main className="main">
      <SearchForm handleSearchSubmit={handleSearchSubmit} />
      <Switch>
        <Route
          path="/characters"
          render={() => (
            <CharactersScreen
              onDelete={onDelete}
              onAdd={onAdd}
              favorites={favorites}
              filters={filters}
            />
          )}
        />
        <Route
          path="/character/:id"
          render={() => (
            <CharacterScreen
              onDelete={onDelete}
              onAdd={onAdd}
              favorites={favorites}
            />
          )}
        />

        <Route
          path="/search"
          render={() => (
            <SearchScreen
              query={query}
              queried={queried}
              onDelete={onDelete}
              onAdd={onAdd}
              favorites={favorites}
              filters={filters}
            />
          )}
        />

        <Route
          path="/favorites"
          render={() => (
            <FavoritesScreen onDelete={onDelete} favorites={favorites} />
          )}
        />
        <Route path="/not-found" component={NotFoundScreen} />
        <Redirect exact from="/" to={'/favorites'} />
        <Redirect to="/not-found" />
      </Switch>
    </main>
  )
}

export default Main
