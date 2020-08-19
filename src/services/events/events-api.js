import http from '../httpconfig'

const getEvents = url => {
  return http
    .get(url)
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(error => {
      console.error(error.message)
    })
}

export default {
  getEvents
}

