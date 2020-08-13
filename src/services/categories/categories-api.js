import http from "../httpconfig";

const getCategories = url => {
  return http
    .get(url)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.error(error.message);
    });
};

export default {
    getCategories
}