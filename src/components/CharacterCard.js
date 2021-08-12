import React from 'react'
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function CharacterCard({character, onDelete}) {
  return (
    <li key={character.id} aria-label={character.name}>
      <div className="card profile">
        <Link className="profile__body" to={`/character/${character.id}`}>
          <figure className="profile__figure">
            <img
              className="profile__image"
              src={`${character.image}`}
              alt={`${character.name}`}
            />
          </figure>
          <div className="profile__info">
            <h2 id="" className="profile__header">
              {`${character.name}`}
            </h2>
            <div className="">status: {`${character.status}`}</div>
            <div className="">gender: {`${character.gender}`}</div>
            <div className="">species: {`${character.species}`}</div>
          </div>
        </Link>
        <div className="profile__footer">
          <button
            className="profile__action"
            aria-label="Add to list"
            data-state="tooltip-hidden"
            onClick={() => onDelete(character.id)}
          >
            <FaMinusCircle style={{color: '#ef5350'}} />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CharacterCard
