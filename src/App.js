import './App.css'
import React from 'react'
import {
  Switch,
  Route,
  // Link,
  Redirect,
  NavLink,
} from 'react-router-dom'

import {Spinner, FullPageSpinner} from './components/lib'
import {CharactersScreen} from './screens/Characters'
import {CharacterScreen} from './screens/Character'
import {NotFoundScreen} from './screens/NotFound'
import {FavoritesScreen} from './screens/Favorites'
import {useLocalStorageState} from './utils/hooks'
import SearchForm from './components/SearchForm'

function App() {
  const [favorites, setFavorites] = useLocalStorageState('favorites-list', [])

  // Delete from favorite list
  const deleteFavorite = id => {
    setFavorites(favorites.filter(favorite => favorite.id !== id))
  }

  // Add to favorite list
  const addFavorite = character => {
    const newFavorite = {...character, isFavorite: true}
    setFavorites([newFavorite, ...favorites])
  }

  return (
    <div className="container">
      <aside className="sidebar">
        <Nav />
      </aside>
      <main className="main">
        <SearchForm />
        <Switch>
          <Route
            path="/characters"
            render={() => (
              <CharactersScreen
                onDelete={deleteFavorite}
                onAdd={addFavorite}
                favorites={favorites}
              />
            )}
          />
          <Route
            path="/character/:id"
            render={() => (
              <CharacterScreen
                onDelete={deleteFavorite}
                onAdd={addFavorite}
                favorites={favorites}
              />
            )}
          />
          <Route
            path="/favorites"
            render={() => (
              <FavoritesScreen
                onDelete={deleteFavorite}
                favorites={favorites}
              />
            )}
          />
          <Route path="/not-found" component={NotFoundScreen} />
          <Redirect exact from="/" to={'/favorites'} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </div>
  )
}

// function NavLink(props) {
//   const match = useRouteMatch(props.to)
//   return (
//     <Link
//       className={'nav__link' + match ? 'nav__link--active' : ''}
//       {...props}
//     />
//   )
// }

function Nav() {
  return (
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

      {/* <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link nav__link--active" href="/characters">
            Characters
          </a>
        </li>

        <li className="nav__item">
          <a className="nav__link" href="/favorite">
            Favorites
          </a>
        </li>
      </ul> */}
    </nav>
  )
}

// function AppRoutes() {
//   return (

//   )
// }

export default App
