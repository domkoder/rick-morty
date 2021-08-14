import React from 'react'
import Spinner from './Spinner'
import CharacterCard from '../components/CharacterCard'

const loadingCharacter = {
  image: '../../cover-image.svg',
  name: 'Loading...',
  status: 'loading...',
  species: 'loading...',
  gender: 'Loading...',
  loadingCharacter: true,
}

const loadingCharacters = Array.from({length: 20}, (v, index) => ({
  id: `loading-book-${index}`,
  ...loadingCharacter,
}))

function LoadingCharacters() {
  return (
    <div>
      <Spinner className="spinner-center" />
      <ul className="character-list">
        {loadingCharacters.map((character, index) => (
          <li key={character.id} aria-label={character.name}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LoadingCharacters
