import React from 'react'
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function CharacterCard({character, onDelete}) {
  const {id, image, name, status, species, gender} = character
  return (
    <div className="card profile">
      <Link className="profile__body" to={`/character/${id}`}>
        <figure className="profile__figure">
          <img className="profile__image" src={`${image}`} alt={`${name}`} />
        </figure>
        <div className="profile__info">
          <h2 id="" className="profile__header">
            {`${name}`}
          </h2>
          <div className="">status: {`${status}`}</div>
          <div className="">gender: {`${gender}`}</div>
          <div className="">species: {`${species}`}</div>
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
  )
}

export default CharacterCard
