import axios from 'axios';

// gere uma função para conecta com api

export const api = axios.create({
  baseURL: process.env.API_URL_CONNECT,
  timeout: 1000,
});

// export default api;
