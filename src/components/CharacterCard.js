import React from 'react'
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function CharacterCard({
  character,
  onDelete,
  onAdd,
  changeIsFavorite,
  cardType,
}) {
  const {id, image, name, status, species, gender, isFavorite} = character
  // console.log(favorites)

  // const isFavorite = favorites.forEach(favorite => {
  //   return favorite.id === id ? true : false
  // })

  // const isFavorite = (id, favorites) => {
  //   favorites.filter(favorite => favorite.id === id)
  // }

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
      <div className="profile__footer tooltip">
        {isFavorite === 'true' ? (
          <button
            className="profile__action"
            aria-label="Remove from list"
            data-state="tooltip-hidden"
            onClick={() => {
              onDelete(id)
              if (changeIsFavorite) {
                changeIsFavorite(id, 'false')
              }
            }}
          >
            <span className="tooltip__text">Remove favorite</span>
            <FaMinusCircle style={{color: '#ef5350'}} />
          </button>
        ) : isFavorite === 'false' ? (
          <button
            className="profile__action tooltip"
            aria-label="Add to list"
            data-state="tooltip-hidden"
            onClick={() => {
              onAdd(character)
              if (changeIsFavorite) {
                changeIsFavorite(id, 'true')
              }
            }}
          >
            <span className="tooltip__text">Add favorite</span>
            <FaPlusCircle style={{color: '#2e6ae7'}} />
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default CharacterCard
