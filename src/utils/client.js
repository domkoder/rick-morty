import axios from 'axios'
const apiURL = `https://rickandmortyapi.com/api/character/`

function client(endpoint, filters = {}) {
  console.log('working')
  return axios({
    method: 'GET',
    url: `${apiURL}/${endpoint}`,
    params: filters,
  })
}
export {client}
