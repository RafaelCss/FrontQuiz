export interface Usuario {
  id?: string;
  nome?: string;
  senha?: string;
  email?: string;
}

export interface RetornoToken {
  access_token: string;
  token_type?: 'Bearer';
  expires: number;
  refresh_token?: string;
  scope?: string;
  name?: string;
  email?: string;
}
