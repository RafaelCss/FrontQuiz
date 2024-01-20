'use client';
import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import servico from '@/Func/servicos/usuarioServico';
import axios from 'axios';

async function refreshAccessToken(token: any) {
  try {
    const url =
      'http://localhost:3001/api/refresh-token?' +
      new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: 'Bearer ' + token.user.refresh_token,
      });

    const response = await axios
      .post(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((res) => res.data);

    if (!response) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const refreshedTokens = response;

    if (!response) {
      throw refreshedTokens;
    }

    return {
      ...token.user,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        senha: { label: 'senha', type: 'password' },
      },
      type: 'credentials',
      async authorize(req) {
        const credentials = {
          email: req?.email,
          senha: req?.senha,
        };
        const res = await servico.postLoginUsuario(credentials as any);
        const user = res;
        if (user) {
          return { ...res } as any;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin',
  },

  callbacks: {
    async session({ session, token, user }) {
      const newToken: Session = token as any;
      const newSession = {
        accessToken: newToken.user?.access_token as any,
        expires: newToken.user?.expires,
        error: token.error,
      } as any;

      return newSession;
    },
    async jwt({ token, account, profile, user, session }) {
      const newToken: Session = token as any;
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: newToken?.refresh_token_expires * 1000,
          refreshToken: account.refresh_token,
          user,
        };
      }
      // Return previous token if the access token has not expired yet
      if (Date.now() < newToken?.refresh_token_expires * 1000) {
        return newToken;
      }
      // Access token has expired, try to update it
      return await refreshAccessToken(newToken);
    },
    redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};

export default NextAuth(authOptions);
