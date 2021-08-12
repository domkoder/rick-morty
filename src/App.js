import './App.css'
import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import {Spinner, FullPageSpinner} from './components/lib'
import {CharactersScreen} from './screens/Characters'
import {CharacterScreen} from './screens/Character'
import {NotFoundScreen} from './screens/NotFound'
import {FavoritesScreen} from './screens/Favorites'
import {useLocalStorageState} from './utils/hooks'
import SearchForm from './components/SearchForm'

function App() {
  const [favorites, setFavorites] = React.useState([
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
        'https://rickandmortyapi.com/api/episode/3',
        'https://rickandmortyapi.com/api/episode/4',
        'https://rickandmortyapi.com/api/episode/5',
        'https://rickandmortyapi.com/api/episode/6',
        'https://rickandmortyapi.com/api/episode/7',
        'https://rickandmortyapi.com/api/episode/8',
        'https://rickandmortyapi.com/api/episode/9',
        'https://rickandmortyapi.com/api/episode/10',
        'https://rickandmortyapi.com/api/episode/11',
        'https://rickandmortyapi.com/api/episode/12',
        'https://rickandmortyapi.com/api/episode/13',
        'https://rickandmortyapi.com/api/episode/14',
        'https://rickandmortyapi.com/api/episode/15',
        'https://rickandmortyapi.com/api/episode/16',
        'https://rickandmortyapi.com/api/episode/17',
        'https://rickandmortyapi.com/api/episode/18',
        'https://rickandmortyapi.com/api/episode/19',
        'https://rickandmortyapi.com/api/episode/20',
        'https://rickandmortyapi.com/api/episode/21',
        'https://rickandmortyapi.com/api/episode/22',
        'https://rickandmortyapi.com/api/episode/23',
        'https://rickandmortyapi.com/api/episode/24',
        'https://rickandmortyapi.com/api/episode/25',
        'https://rickandmortyapi.com/api/episode/26',
        'https://rickandmortyapi.com/api/episode/27',
        'https://rickandmortyapi.com/api/episode/28',
        'https://rickandmortyapi.com/api/episode/29',
        'https://rickandmortyapi.com/api/episode/30',
        'https://rickandmortyapi.com/api/episode/31',
        'https://rickandmortyapi.com/api/episode/32',
        'https://rickandmortyapi.com/api/episode/33',
        'https://rickandmortyapi.com/api/episode/34',
        'https://rickandmortyapi.com/api/episode/35',
        'https://rickandmortyapi.com/api/episode/36',
        'https://rickandmortyapi.com/api/episode/37',
        'https://rickandmortyapi.com/api/episode/38',
        'https://rickandmortyapi.com/api/episode/39',
        'https://rickandmortyapi.com/api/episode/40',
        'https://rickandmortyapi.com/api/episode/41',
      ],
      url: 'https://rickandmortyapi.com/api/character/1',
      created: '2017-11-04T18:48:46.250Z',
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'Earth (C-137)',
        url: 'https://rickandmortyapi.com/api/location/1',
      },
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/1',
        'https://rickandmortyapi.com/api/episode/2',
        'https://rickandmortyapi.com/api/episode/3',
        'https://rickandmortyapi.com/api/episode/4',
        'https://rickandmortyapi.com/api/episode/5',
        'https://rickandmortyapi.com/api/episode/6',
        'https://rickandmortyapi.com/api/episode/7',
        'https://rickandmortyapi.com/api/episode/8',
        'https://rickandmortyapi.com/api/episode/9',
        'https://rickandmortyapi.com/api/episode/10',
        'https://rickandmortyapi.com/api/episode/11',
        'https://rickandmortyapi.com/api/episode/12',
        'https://rickandmortyapi.com/api/episode/13',
        'https://rickandmortyapi.com/api/episode/14',
        'https://rickandmortyapi.com/api/episode/15',
        'https://rickandmortyapi.com/api/episode/16',
        'https://rickandmortyapi.com/api/episode/17',
        'https://rickandmortyapi.com/api/episode/18',
        'https://rickandmortyapi.com/api/episode/19',
        'https://rickandmortyapi.com/api/episode/20',
        'https://rickandmortyapi.com/api/episode/21',
        'https://rickandmortyapi.com/api/episode/22',
        'https://rickandmortyapi.com/api/episode/23',
        'https://rickandmortyapi.com/api/episode/24',
        'https://rickandmortyapi.com/api/episode/25',
        'https://rickandmortyapi.com/api/episode/26',
        'https://rickandmortyapi.com/api/episode/27',
        'https://rickandmortyapi.com/api/episode/28',
        'https://rickandmortyapi.com/api/episode/29',
        'https://rickandmortyapi.com/api/episode/30',
        'https://rickandmortyapi.com/api/episode/31',
        'https://rickandmortyapi.com/api/episode/32',
        'https://rickandmortyapi.com/api/episode/33',
        'https://rickandmortyapi.com/api/episode/34',
        'https://rickandmortyapi.com/api/episode/35',
        'https://rickandmortyapi.com/api/episode/36',
        'https://rickandmortyapi.com/api/episode/37',
        'https://rickandmortyapi.com/api/episode/38',
        'https://rickandmortyapi.com/api/episode/39',
        'https://rickandmortyapi.com/api/episode/40',
        'https://rickandmortyapi.com/api/episode/41',
      ],
      url: 'https://rickandmortyapi.com/api/character/2',
      created: '2017-11-04T18:50:21.651Z',
    },
    {
      id: 3,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      origin: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/6',
        'https://rickandmortyapi.com/api/episode/7',
        'https://rickandmortyapi.com/api/episode/8',
        'https://rickandmortyapi.com/api/episode/9',
        'https://rickandmortyapi.com/api/episode/10',
        'https://rickandmortyapi.com/api/episode/11',
        'https://rickandmortyapi.com/api/episode/12',
        'https://rickandmortyapi.com/api/episode/14',
        'https://rickandmortyapi.com/api/episode/15',
        'https://rickandmortyapi.com/api/episode/16',
        'https://rickandmortyapi.com/api/episode/17',
        'https://rickandmortyapi.com/api/episode/18',
        'https://rickandmortyapi.com/api/episode/19',
        'https://rickandmortyapi.com/api/episode/20',
        'https://rickandmortyapi.com/api/episode/21',
        'https://rickandmortyapi.com/api/episode/22',
        'https://rickandmortyapi.com/api/episode/23',
        'https://rickandmortyapi.com/api/episode/24',
        'https://rickandmortyapi.com/api/episode/25',
        'https://rickandmortyapi.com/api/episode/26',
        'https://rickandmortyapi.com/api/episode/27',
        'https://rickandmortyapi.com/api/episode/29',
        'https://rickandmortyapi.com/api/episode/30',
        'https://rickandmortyapi.com/api/episode/31',
        'https://rickandmortyapi.com/api/episode/32',
        'https://rickandmortyapi.com/api/episode/33',
        'https://rickandmortyapi.com/api/episode/34',
        'https://rickandmortyapi.com/api/episode/35',
        'https://rickandmortyapi.com/api/episode/36',
        'https://rickandmortyapi.com/api/episode/38',
        'https://rickandmortyapi.com/api/episode/39',
        'https://rickandmortyapi.com/api/episode/40',
        'https://rickandmortyapi.com/api/episode/41',
      ],
      url: 'https://rickandmortyapi.com/api/character/3',
      created: '2017-11-04T19:09:56.428Z',
    },
  ])

  // Delete Favorite
  const deleteFavorite = id => {
    setFavorites(favorites.filter(favorite => favorite.id !== id))
  }

  return (
    <div className="container">
      <aside className="sidebar">
        <Nav />
      </aside>
      <main className="main">
        <SearchForm />
        <Routes>
          <Route
            path="/characters"
            element={<CharactersScreen favorites={favorites} />}
          />
          <Route
            path="/character/:id"
            element={<CharacterScreen favorites={favorites} />}
          />
          <Route
            path="/favorites/"
            element={
              <FavoritesScreen
                onDelete={deleteFavorite}
                favorites={favorites}
              />
            }
          />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </main>
    </div>
  )
}

function NavLink(props) {
  return <Link className="nav__link nav__link--active" {...props} />
}

function Nav() {
  return (
    <nav className="nav card">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink className="nav__link nav__link--active" to="/characters">
            Characters
          </NavLink>
        </li>

        <li className="nav__item">
          <NavLink className="nav__link" to="/favorites">
            Favorites
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
