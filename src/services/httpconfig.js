import axios from 'axios'

const http = axios.create({
  baseURL: 'https://homolog-eventos.bivilabs.com.br/',
  timeout: 5000
})

export default http