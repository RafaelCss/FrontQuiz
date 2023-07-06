export interface Retorno<T> {
  dados?: T[];
  erros?: Dictionary<string[]>;
  paginacao?: IPaginacao;
  sucesso?: boolean;
  message?: string;
}

export default interface Erros {
  [Key: string]: string;
}

export interface IPaginacao {
  skip?: number; //pagina
  take?: number; // quantidade por pagina
  total?: number; // total de dados
}

export interface Dictionary<T> {
  [Key: string]: T;
}
