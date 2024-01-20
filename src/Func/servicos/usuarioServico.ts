/* eslint-disable import/no-anonymous-default-export */

import { RetornoToken, Usuario } from '@/Components/Entidade/Cadastro/Model';
import { api } from '../lib/hooks/configAxios';
import { Retorno } from '../Model';
type CadastroUsuario = (usuario: Usuario) => Promise<Retorno<Usuario>>;
type LoginUsuario = (usuario: Usuario) => Promise<RetornoToken>;
type LogarOuCadastrar = (usuario: Usuario, logar: boolean) => Promise<any>;

const postCadastroUsuario: CadastroUsuario = async (
  dados: Usuario
): Promise<Retorno<Usuario>> => {
  return await api
    .post<Retorno<Usuario>>('cadastro', dados)
    .then((res: any) => res.data)
    .catch((err: any) => err);
};

const postLoginUsuario: LoginUsuario = async (
  dados: Usuario
): Promise<RetornoToken> => {
  return await api
    .post<Retorno<Usuario>>('login', dados)
    .then((res: any) => res.data)
    .catch((err: any) => err);
};

const logarOuCadastrar: LogarOuCadastrar = async (
  dados: Usuario,
  logar: boolean
) => (!logar ? postLoginUsuario(dados) : postCadastroUsuario(dados));

export default { postCadastroUsuario, postLoginUsuario, logarOuCadastrar };
