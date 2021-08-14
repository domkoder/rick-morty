import React from 'react'

const status = [
  {
    id: 1,
    value: 'alive',
  },
  {
    id: 2,
    value: 'deade',
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

function FilterBox({handleChangeFilters, filters}) {
  return (
    <div>
      {/* <div className="nav__item"></div> */}
      <fieldset>
        <legend>Filter by:</legend>
        <label htmlFor="status">Status:</label>
        <select
          onChange={event => handleChangeFilters(event)}
          name="status"
          id="status"
        >
          <option value="">-</option>
          {status.map(option => (
            <option
              key={option.id}
              name={filters.value}
              value={option.value}
              selected={filters.status === option.value ? true : false}
            >
              {option.value}
            </option>
          ))}
        </select>

        <label htmlFor="gender">Gender</label>

        <select
          onChange={event => handleChangeFilters(event)}
          name="gender"
          id="gender"
        >
          <option value="">-</option>
          {gender.map(option => (
            <option
              key={option.id}
              name={filters.value}
              value={option.value}
              selected={filters.gender === option.value ? true : false}
            >
              {option.value}
            </option>
          ))}
        </select>
      </fieldset>
      {/* <div>
        <RadioButton
          handleChangeFilters={handleChangeFilters}
          name="species"
          label="SPECIES"
        />
      </div> */}
    </div>
  )
}
export default FilterBox
