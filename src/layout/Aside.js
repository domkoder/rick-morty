import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import FilterBox from '../components/FilterBox'

function Aside({handleChangeFilters, filters}) {
  const location = useLocation()
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
        {location.pathname === '/characters' ||
        location.pathname === '/search' ? (
          <FilterBox
            handleChangeFilters={handleChangeFilters}
            filters={filters}
          />
        ) : null}
      </nav>
    </aside>
  )
}

export default Aside
