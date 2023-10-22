import NextAuth, { NextAuthOptions } from 'next-auth';
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
        const res = await servico.logarOuCadastrar(credentials as any, false);
        const user = res;
        console.log(user);
        if (user) {
          return user as any;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, token, user }) {
      console.log(session, token, user);
      return session;
    },
    async jwt({ token, account, profile }) {
      if (account) {
        // Aqui você pode definir o accessToken no token
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
