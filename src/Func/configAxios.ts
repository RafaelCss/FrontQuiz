import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API_URL_CONNECT,
  // paramsSerializer: {
  //   dots: true,
  // },
});

export default api;
