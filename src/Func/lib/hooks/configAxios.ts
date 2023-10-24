import axios, { AxiosInstance } from 'axios';
import { getSession, useSession } from 'next-auth/react';

function servicoAxios(): AxiosInstance {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_API_URL_CONNECT,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
    paramsSerializer: {
      dots: true,
    },
  });

  api.interceptors.request.use(async (request) => {
    const session = await getSession();
    if (session) {
      request.headers.common = {
        Authorization: `Bearer  ${session?.user?.accessToken}`,
      };
    }

    return request;
  });

  return api;
}

export default servicoAxios;
