import './App.css'
import React from 'react'
import {Switch, Route, Redirect, NavLink} from 'react-router-dom'

import {Spinner, FullPageSpinner} from './components/lib'
import {useLocalStorageState} from './utils/hooks'
import CharactersScreen from './screens/CharactersScreen'
import CharacterScreen from './screens/CharacterScreen'
import SearchScreen from './screens/SearchScreen'
import FavoritesScreen from './screens/FavoritesScreen'
import NotFoundScreen from './screens/NotFoundScreen'

import SearchForm from './components/SearchForm'

function App() {
  const [favorites, setFavorites] = useLocalStorageState('favorites-list', [])
  const [query, setQuery] = React.useState()
  const [queried, setQueried] = React.useState(false)
  function handleSearchSubmit(value) {
    console.log(value)
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
      <Aside />
      <Main
        onDelete={deleteFavorite}
        onAdd={addFavorite}
        favorites={favorites}
        handleSearchSubmit={handleSearchSubmit}
        query={query}
        queried={queried}
      />
    </div>
  )
}

function Aside() {
  return (
    <aside className="sidebar">
      <nav className="nav card">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              className="nav__link"
              activeClassName="nav__link--active"
              to="/favorites"
            >
              Favorites
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink
              className="nav__link"
              activeClassName="nav__link--active"
              to="/characters"
            >
              Characters
            </NavLink>
          </li>
        </ul>

        <div>
          <div className="nav__item">Filter Characters by</div>
          <hr />
          <fieldset>
            <legend>STATUS</legend>

            <RadioButton name="status" value="alive" label="Alive" />
            <RadioButton name="status" label="Dead" />
            <RadioButton name="status" label="Unknown" />
          </fieldset>

          <fieldset>
            <legend>GENDER</legend>
            <RadioButton name="gender" value="female" label="Female" />
            <RadioButton name="gender" value="male" label="Male" />
            <RadioButton name="gender" value="genderless" label="Genderless" />
            <RadioButton name="gender" value="unknown" label="Unknown" />
          </fieldset>
          {/* <div>
            <CheckBox label="SPECIES" />
          </div> */}
        </div>
      </nav>
    </aside>
  )
}

function RadioButton({value, name, label}) {
  return (
    // <input type="radio" id="age1" name="age" value="30">
    // <label for="age1">0 - 30</label><br></br>

    <label className="checkbox">
      <input aria-checked="true" type="radio" name={name} value={value} />
      {label}
    </label>
  )
}

function Main({
  onDelete,
  onAdd,
  favorites,
  handleSearchSubmit,
  query,
  queried,
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

export default App
