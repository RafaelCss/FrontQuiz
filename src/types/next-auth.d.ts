import NextAuth, { DefaultUser } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  export interface Session {
    user: {
      id?: string;
      name: string;
      email: string;
      access_token?: string;
      accessToken?: string;
    };
  }

  export interface JWT {
    access_token?: string;
    accessToken?: string;
    expires: number;
    refresh_token_expires?: number;
    accessTokenExpires?: number;
  }

  export interface User {
    id: string;
    name?: string;
    email: string;
    role: string[];
    expires: number;
    access_token?: string;
    refresh_token_expires: number;
  }
}
