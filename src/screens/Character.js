import React from 'react'
import {useParams} from 'react-router-dom'
import {client} from '../utils/client'
import {useAsync} from '../utils/hooks'
import {FaPlusCircle, FaMinusCircle} from 'react-icons/fa'

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

function CharacterScreen() {
  const {id} = useParams()
  const {data, run} = useAsync()

  React.useEffect(() => {
    run(client(`character/${id}`))
  }, [run, id])

  console.log('data:', data)

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
  } = data ?? loadingCharacter

  return (
    <div aria-label={name}>
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
        <footer className="profile__footer">
          <button
            className="profile__action"
            aria-label="Add to list"
            data-state="tooltip-hidden"
          >
            <FaPlusCircle />
          </button>
        </footer>
      </div>
    </div>
  )
}

export {CharacterScreen}
