export interface Retorno<T> {
  dados?: T[];
  erros?: Erros[];
  paginacao?: IPaginacao;
  sucesso?: boolean;
  message?: string;
}

export default interface Erros {
  campo?: string;
  mensagem?: string;
}

export interface IPaginacao {
  skip?: number; //pagina
  take?: number; // quantidade por pagina
  total?: number; // total de dados
}
