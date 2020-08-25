import http from '../httpconfig'

const getEvents = (url, nameContains) => {
  nameContains = nameContains || ''

  return http
    .get(url, { query: { name_contains: nameContains } })
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.error(error.message)
    })
}

export default {
  getEvents
}

