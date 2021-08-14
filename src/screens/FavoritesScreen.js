import React from 'react'
import {Link} from 'react-router-dom'
import CharacterCardList from '../components/CharacterCardList'

function FavoritesScreen({favorites, onDelete}) {
  return (
    <div>
      {favorites?.length ? (
        <CharacterCardList onDelete={onDelete} characters={favorites} />
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

export default FavoritesScreen
