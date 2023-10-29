import NextAuth from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  export interface Session {
    error?: string;
    accessToken?: string;
    accessTokenExpires?: ISODateString;
    refreshToken?: string;
    user?: User;
  }

  export interface User {
    id: string;
    nome?: string;
    email: string;
    role: string[];
    access_token?: string;
  }
}
