import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import servico from '@/Func/servicos/usuarioServico';
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        senha: { label: 'senha', type: 'password' },
        email: { label: 'email', type: 'text' },
      },
      async authorize(credentials, req) {
        const res = await servico.logarOuCadastrar(credentials as any, false);
        const user = res.dados;
        if (res.sucesso && user) {
          return user as any;
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    session({ session, token }) {
      const newSession = {
        ...session,
      } as Session;
      console.log(newSession, token);
      return newSession;
    },
    async signIn({ user, account, profile, email, credentials }) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
};

export default NextAuth(authOptions);
