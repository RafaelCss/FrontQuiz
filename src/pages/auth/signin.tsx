import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { getProviders, signIn } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';

export default function SignIn() {
  return (
    <>
      <button
        onClick={() =>
          signIn('credentials', {
            email: 'rf2014souza@gmail.com',
            senha: '123456',
            redirect: true,
            callbackUrl: '/',
          })
        }>
        Sign in with
      </button>
    </>
  );
}
