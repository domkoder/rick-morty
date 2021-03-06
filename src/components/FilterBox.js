import React from 'react'

const status = [
  {
    id: 1,
    value: 'alive',
  },
  {
    id: 2,
    value: 'dead',
  },
  {
    id: 3,
    value: 'unknown',
  },
]

const gender = [
  {
    id: 1,
    value: 'male',
  },
  {
    id: 2,
    value: 'female',
  },
  {
    id: 3,
    value: 'unknown',
  },
  {
    id: 4,
    value: 'genderless',
  },
]

const species = [
  {
    id: 1,
    value: 'alien',
  },
  {
    id: 2,
    value: 'human',
  },
  {
    id: 3,
    value: 'humanoid',
  },
  {
    id: 4,
    value: 'robot',
  },

  {
    id: 5,
    value: 'poopybutthole',
  },

  {
    id: 6,
    value: 'mythological',
  },
  {
    id: 7,
    value: 'animal',
  },
  {
    id: 8,
    value: 'cronenberg',
  },
  {
    id: 9,
    value: 'disease',
  },
  {
    id: 10,
    value: 'unknown',
  },
]

function FilterBox({handleChangeFilters, filters}) {
  return (
    <div>
      {/* <div className="nav__item"></div> */}
      <fieldset>
        <legend>Filter by:</legend>

        <div>
          <label htmlFor="status">Status:</label>
          <select
            onChange={event => handleChangeFilters(event)}
            name="status"
            id="status"
            defaultValue={filters.status}
          >
            <option value="">-</option>
            {status.map(({id, value}) => (
              <option key={id} name={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <select
            onChange={event => handleChangeFilters(event)}
            name="gender"
            id="gender"
            defaultValue={filters.gender}
          >
            <option value="">-</option>
            {gender.map(({id, value}) => (
              <option key={id} name={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="species">Species:</label>
          <select
            onChange={event => handleChangeFilters(event)}
            name="species"
            id="species"
            defaultValue={filters.species}
          >
            <option value="">-</option>
            {species.map(({id, value}) => (
              <option key={id} name={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
    </div>
  )
}
export default FilterBox
