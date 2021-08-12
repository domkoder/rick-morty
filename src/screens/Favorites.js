import React from 'react'
import {Link} from 'react-router-dom'
import CharacterCard from '../components/CharacterCard'

function FavoritesScreen({favorites, onDelete}) {
  return (
    <div>
      {favorites?.length ? (
        <ul className="character-list">
          {favorites.map(character => (
            <CharacterCard character={character} onDelete={onDelete} />
          ))}
        </ul>
      ) : (
        <div className="text-container">
          <p>
            Hey there! Welcome to your rick and morty favorite character list.
            Get started by heading over to{' '}
            <Link to="/characters">the Characters page</Link> to add Characters
            to your list.
          </p>
          {/* <p>No character found. Try another search.</p> */}
        </div>
      )}
    </div>
  )
}

export {FavoritesScreen}
