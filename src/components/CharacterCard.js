import React from 'react'
import {FaHeart} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import CircleButton from '../components/CircleButton'

function CharacterCard({
  character,
  onDelete,
  onAdd,
  changeIsFavorite,
  cardType,
}) {
  const {id, image, name, status, species, gender, isFavorite} = character
  return (
    <div className="card profile">
      <Link className="profile__body" to={`/character/${id}`}>
        <figure className="profile__figure">
          <img className="profile__image" src={`${image}`} alt={`${name}`} />
        </figure>
        <div className="profile__info">
          <h2 id="" className="profile__header">
            {`${name}`} <br />
            {isFavorite === 'true' ? <FaHeart className="like" /> : null}
          </h2>
          <div className="">status: {`${status}`}</div>
          <div className="">gender: {`${gender}`}</div>
          <div className="">species: {`${species}`}</div>
        </div>
      </Link>
      <div className="profile__footer tooltip">
        {isFavorite === 'true' ? (
          <CircleButton
            label="Remove favorite"
            variance="remove"
            update={() => {
              onDelete(id)
              if (changeIsFavorite) {
                changeIsFavorite(id, 'false')
              }
            }}
          />
        ) : isFavorite === 'false' ? (
          <CircleButton
            label="Add favorite"
            variance="add"
            update={() => {
              onAdd(character)
              if (changeIsFavorite) {
                changeIsFavorite(id, 'true')
              }
            }}
          />
        ) : null}
      </div>
    </div>
  )
}

export default CharacterCard
