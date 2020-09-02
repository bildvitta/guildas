import http from './httpconfig'

const getList = (url, query = '') => {
  return http
    .get(url, { params: { ...query } })
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.error(error.message)
    })
}

export default {
  getList
}
