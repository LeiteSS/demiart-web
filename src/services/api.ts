import axios from 'axios';

const api = axios.create({
  baseURL: 'https://demiart-api.herokuapp.com'
})

export default api;