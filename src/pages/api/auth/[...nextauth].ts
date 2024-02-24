'use server';
import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import servico from '@/Func/servicos/usuarioServico';
import axios from 'axios';

// Função para atualizar o token de acesso
async function refreshAccessToken(token: any) {
  try {
    const url = `http://localhost:3001/api/refresh-token?${new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: 'Bearer ' + token.refresh_token,
    })}`;

    const response = await axios.post(url, {
      headers: { 'Content-Type': 'application/json' },
    });
    const refreshedTokens = response.data;

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token?.refresh_token,
    };
  } catch (error) {
    console.error(error);

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
}

// Configurações do NextAuth
const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        senha: { label: 'senha', type: 'password' },
      },
      type: 'credentials',
      async authorize(credentials, req) {
        const credentialsObj = {
          email: credentials?.email,
          senha: credentials?.senha,
        };

        try {
          const res = await servico.postLoginUsuario(credentialsObj as any);
          const user = res as any;

          if (res) {
            return user as any;
          }

          return null;
        } catch (error) {
          console.error(error);
          return null;
        }
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
    async jwt({ token, user }) {
      const newToken: any = token as any;
      //TODO: Se em teste não criar a sessão retornar somente o token e estudar o refreshToken
      user && (token.user = user);
      if (Date.now() < newToken?.user?.refresh_token_expires * 1000) {
        return token;
      }
      // Access token has expired, try to update it
      return await refreshAccessToken(newToken?.user);
      //return token;
    },
    async session({ session, token }) {
      session = token.user as any;
      return session;
    },

    redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};

export default NextAuth(authOptions);
