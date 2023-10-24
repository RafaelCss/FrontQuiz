import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import servico from '@/Func/servicos/usuarioServico';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        senha: { label: 'senha', type: 'password' },
      },
      async authorize(credentials, req) {
        const res = await servico.postLoginUsuario(credentials as any);
        const user = res;
        console.log(user);
        if (user) {
          return {
            ...user,
            accessToken: user.access_token,
            name: user.name,
            email: user.email,
            token_type: 'Bearer',
          } as any;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
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
          // accessTokenExpires: account.expires_at * 1000,
          refreshToken: account.refresh_token,
          user,
        };
      }

      return token;
    },
    redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
};

export default NextAuth(authOptions);
