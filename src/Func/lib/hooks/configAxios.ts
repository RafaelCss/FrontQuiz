import axios, { AxiosInstance } from 'axios';
import { getSession } from 'next-auth/react';

export const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API_URL_CONNECT,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: {
    dots: true,
  },
});

api.interceptors.request.use(async function (config: any) {
  const session = await getSession();
  console.log(session);
  if (session) {
    config.headers.Authorization = `Bearer ${session?.accessToken}`;
  }

  return config as any;
});
