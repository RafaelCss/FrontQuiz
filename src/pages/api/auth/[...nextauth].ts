'use client';
import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import servico from '@/Func/servicos/usuarioServico';

// async function refreshAccessToken(token: any) {
//   try {
//     const url =
//       'https://oauth2.googleapis.com/token?' +
//       new URLSearchParams({
//         grant_type: 'refresh_token',
//         refresh_token: token.refreshToken,
//       });

//     const response = await fetch(url, {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       method: 'POST',
//     });

//     const refreshedTokens = await response.json();

//     if (!response.ok) {
//       throw refreshedTokens;
//     }

//     return {
//       ...token,
//       accessToken: refreshedTokens.access_token,
//       accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
//       refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
//     };
//   } catch (error) {
//     console.log(error);

//     return {
//       ...token,
//       error: 'RefreshAccessTokenError',
//     };
//   }
// }

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
          return { ...res.user } as any;
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
      const newSession = {
        ...session,
        user: token.user,
        accessToken: token.accessToken,
        expires: token.accessTokenExpires,
        error: token.error,
      } as Session;
      return newSession;
    },
    async jwt({ token, account, profile, user, session }) {
      if (account && user) {
        return {
          accessToken: account.access_token,
          //accessTokenExpires: account.expires_at * 1000,
          refreshToken: account.refresh_token,
          user,
        };
      }
      // Return previous token if the access token has not expired yet
      // if (Date.now() < token.accessTokenExpires) {
      //   return token;
      // }

      // Access token has expired, try to update it
      return token;
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
