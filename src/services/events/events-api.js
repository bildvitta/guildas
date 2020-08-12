import http from "../httpconfig";

const getEvents = url => {
  http
    .get(url)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      console.error(error.message);
    });
};

export default {
    getEvents
}

