import React from 'react'
import CharacterCard from '../components/CharacterCard'

function CharacterCardList({
  onDelete,
  favorites,
  onAdd,
  characters,
  lastCharacterElementRef,
  changeIsFavorite,
}) {
  return (
    <ul className="character-list">
      {characters.map((character, index) => {
        if (characters.length === index + 1) {
          return (
            <li
              key={`${character.id}`}
              ref={lastCharacterElementRef}
              aria-label={character.name}
            >
              <CharacterCard
                character={character}
                favorites={favorites}
                onDelete={onDelete}
                onAdd={onAdd}
                changeIsFavorite={changeIsFavorite}
              />
            </li>
          )
        } else {
          return (
            <li key={character.id} aria-label={character.name}>
              <CharacterCard
                character={character}
                favorites={favorites}
                onDelete={onDelete}
                onAdd={onAdd}
                changeIsFavorite={changeIsFavorite}
                cardType="test"
              />
            </li>
          )
        }
      })}
    </ul>
  )
}

export default CharacterCardList
