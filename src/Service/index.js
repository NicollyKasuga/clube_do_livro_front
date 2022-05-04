import axios from 'axios';

const api = axios.create({
  baseURL: 'https://clube-do-livro-g15.herokuapp.com/api',
});

export default api;
