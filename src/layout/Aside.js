import React from 'react'
import {NavLink} from 'react-router-dom'
import RadioButton from '../components/RadioButton'

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
        <FilterBox />
      </nav>
    </aside>
  )
}

function FilterBox(params) {
  return (
    <div>
      <div className="nav__item">Filter by:</div>
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
      <div>
        <RadioButton label="SPECIES" />
      </div>
    </div>
  )
}

export default Aside
