import axios, { AxiosInstance } from 'axios';
import { getSession, useSession } from 'next-auth/react';

async function servicoAxios() {
  const session = await getSession();
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_URL_API_URL_CONNECT,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer  ${session?.user?.accessToken}`,
    },
    withCredentials: true,
    paramsSerializer: {
      dots: true,
    },
  });

  // api.interceptors.request.use(async (request) => {
  //   const session = await getSession();
  //   if (session) {
  //     request.headers.common = {
  //       Authorization: `Bearer  ${session?.user?.accessToken}`,
  //     };
  //   }

  //   return request;
  // });

  return api;
}

export default servicoAxios;
