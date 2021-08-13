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
  // const {character} = useFetchCharacter(favorites, `character/${id}`)
  const [character, setCharacter] = React.useState(null)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    axios({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/character/${id}`,
    })
      .then(({data}) => {
        data.isFavorite = favorites.find(({id}) => id === data.id)
          ? true
          : false
        console.log(favorites)
        setCharacter(data)
      })
      .catch(error => setError(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

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

          {isFavorite ? (
            <button
              className="profile__action"
              aria-label="Add to list"
              data-state="tooltip-hidden"
              onClick={() => {
                onDelete(id)
                setCharacter({...character, isFavorite: false})
              }}
            >
              <FaMinusCircle style={{color: '#ef5350'}} />
            </button>
          ) : (
            <button
              className="profile__action"
              aria-label="Add to list"
              data-state="tooltip-hidden"
              onClick={() => {
                onAdd(character)
                setCharacter({...character, isFavorite: true})
              }}
            >
              <FaPlusCircle style={{color: '#2e6ae7'}} />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export {CharacterScreen}
