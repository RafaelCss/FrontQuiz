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
  expires?: number;
}
