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
  const session: any = await getSession();
  if (session?.session?.accessToken) {
    config.headers.Authorization = `Bearer ${session?.session?.accessToken}`;
  }

  return config as any;
});
