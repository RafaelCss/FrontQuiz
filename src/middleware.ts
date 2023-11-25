import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/auth/credentials-signin',
  },

  callbacks: {
    authorized: ({ token }) => !!token,
  },
});
