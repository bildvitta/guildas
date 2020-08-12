import axios from 'axios'

const http = axios.create({
    baseURL: 'http://104.131.88.91/',
    timeout: 5000,
})

export default http