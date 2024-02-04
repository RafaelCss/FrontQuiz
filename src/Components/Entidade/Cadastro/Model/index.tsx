export interface Usuario {
  id?: string;
  nome?: string;
  senha?: string;
  email?: string;
}

export interface RetornoToken {
  user?: {
    access_token: string;
    name?: string;
    email?: string;
    token_type?: 'Bearer';
  };
  access_token: string;
  name?: string;
  email?: string;
  token_type?: 'Bearer';
  token?: {
    access_token: string;
    refresh_token_expires: number;
    expires: number;
    refresh_token?: string;
  };
  expires?: number;
}
