import React from 'react'
import {useParams} from 'react-router-dom'
import {client} from '../utils/client'
import {useAsync} from '../utils/hooks'
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa'
import axios from 'axios'
import {useFetchCharacter} from '../utils/hooks'

const loadingCharacter = {
  image: '../../cover-image.svg',
  name: 'Loading...',
  status: 'loading...',
  species: 'loading...',
  type: 'loading...',
  gender: 'Loading...',
  origin: {name: 'Loading...'},
  location: {name: 'Loading...'},
  episode: {length: 'Loading...'},
  loadingCharacter: true,
}

function CharacterScreen({onDelete, onAdd, favorites}) {
  const {id} = useParams()
  const {character} = useFetchCharacter(favorites, `character/${id}`)
  const buttonType = 'remove'

  const {
    image,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    episode,
    isFavorite,
  } = character ?? loadingCharacter

  console.log('buttonType:', buttonType)

  // function buttonType(params) {}

  return (
    <div aria-label={name} style={{marginTop: '1.5em'}}>
      <div className="card profile">
        <div className="profile__body" style={{alignItems: 'flex-start'}}>
          <figure className="profile__figure">
            <img className="profile__image" src={`${image}`} alt={`${name}`} />
          </figure>
          <div className="profile__info">
            <h2 id="" className="profile__header">
              {`${name}`}
            </h2>
            <div className="">status: {`${status}`}</div>
            <div className="">species: {`${species}`}</div>
            <div className="">type: {`${type}`}</div>
            <div className="">gender: {`${gender}`}</div>
            <div className="">origin: {`${origin.name}`}</div>
            <div className="">location: {`${location.name}`}</div>
            <div className="">number of episode: {`${episode.length}`}</div>
          </div>
        </div>
        <div className="profile__footer">
          {/* isFavorite */}

          {buttonType === 'remove' ? (
            <button
              className="profile__action"
              aria-label="Add to list"
              data-state="tooltip-hidden"
              onClick={() => {
                onDelete(id)
                // setButtonType('add')
              }}
            >
              <FaMinusCircle style={{color: '#ef5350'}} />
            </button>
          ) : buttonType === 'add' ? (
            <button
              className="profile__action"
              aria-label="Add to list"
              data-state="tooltip-hidden"
              onClick={() => {
                onAdd(character)
                // setButtonType('remove')
              }}
            >
              <FaPlusCircle style={{color: '#2e6ae7'}} />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export {CharacterScreen}
