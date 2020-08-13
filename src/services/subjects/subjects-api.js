import http from '../httpconfig'

const getSubjects = url => {
  return http
    .get(url)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error.message);
    });
}

export default {
    getSubjects
}
