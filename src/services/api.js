import axios from 'axios';

const api = axios.create({
  baseURL: 'http://stupidlabs.net',
});

export default api;
