import React from 'react'
import axios from 'axios'
import CharacterCardList from '../components/CharacterCardList'
import LoadingCharacters from '../components/LoadingCharacters'
import Error from '../components/Error'
import {useFetchInfinite} from '../utils/hooks'

function SearchScreen({query, queried, favorites, onDelete, onAdd, filters}) {
  const newFilter = {...filters, name: query}
  const {
    loading,
    error,
    errorMessage,
    characters,
    changeIsFavorite,
    lastCharacterElementRef,
  } = useFetchInfinite(favorites, newFilter)

  return (
    <div>
      {!loading ? (
        characters?.length ? (
          <CharacterCardList
            onDelete={onDelete}
            favorites={favorites}
            onAdd={onAdd}
            characters={characters}
            lastCharacterElementRef={lastCharacterElementRef}
            changeIsFavorite={changeIsFavorite}
          />
        ) : (
          <p>No character found. Try another search.</p>
        )
      ) : null}

      {loading ? <LoadingCharacters /> : null}
      {error ? <Error error={errorMessage} /> : null}
    </div>
  )
}

export default SearchScreen
