// import {useEffect, useState} from 'react'
import React from 'react'

import axios from 'axios'

export default function useBookSearch(query, pageNumber, favorites) {
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  const [characters, setCharacters] = React.useState([])
  const [hasMore, setHasMore] = React.useState(false)

  React.useEffect(() => {
    setCharacters([])
  }, [query])

  React.useEffect(() => {
    setLoading(true)
    setError(false)
    axios({
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character',
      params: {page: pageNumber},
    })
      .then(({data}) => {
        data.results.map(result => {
          result.isFavorite = favorites.find(({id}) => id === result.id)
            ? true
            : false
        })
        // isFavorite = favorites.find(({id}) =>
        //   id === data.results ? true : false,
        // )

        setCharacters(previousCharacter => {
          return [...previousCharacter, ...data.results]
        })
        setHasMore(data.results.length > 0)
        setLoading(false)
      })
      .catch(error => {
        setError(true)
        setLoading(false)
      })
  }, [pageNumber])
  return {loading, error, characters, hasMore}
}
