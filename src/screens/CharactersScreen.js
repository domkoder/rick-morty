import React from 'react'
import CharacterCardList from '../components/CharacterCardList'
import LoadingCharacters from '../components/LoadingCharacters'
import Error from '../components/Error'
import {useFetchInfinite} from '../utils/hooks'

function CharactersScreen({onDelete, favorites, onAdd, filters}) {
  const [pageNumber, setPageNumber] = React.useState(1)
  const {
    loading,
    error,
    errorMessage,
    characters,
    changeIsFavorite,
    lastCharacterElementRef,
  } = useFetchInfinite({
    favorites,
    pageNumber,
    filters,
    setPageNumber,
  })

  // console.log(errorMessage)

  return (
    <div>
      <div className="text-container">
        <p>Welcome to the character page.</p>
        <p>Here, let me load a few characters for you...</p>
        <p>Here you go! Find more characters with the search bar above.</p>
      </div>
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
        ) : null
      ) : null}
      {loading ? <LoadingCharacters /> : null}
      {error ? <Error error={errorMessage} /> : null}
    </div>
  )
}

export default CharactersScreen
