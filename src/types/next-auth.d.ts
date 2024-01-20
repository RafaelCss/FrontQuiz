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
    expires: number;
    refresh_token_expires: number;
    refresh_token: string;
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
    nome?: string;
    email: string;
    role: string[];
    expires: number;
    accessToken?: string;
    user?: {
      access_token?: string;
    };
    access_token?: string;
    refresh_token_expires: number;
  }
}
