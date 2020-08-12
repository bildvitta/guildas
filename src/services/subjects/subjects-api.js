import http from '../httpconfig'

const getSubjects= url => {
  return http
    .get(url)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      console.error(error.message);
    });
}

export default {
    getSubjects
}
