/* eslint-disable import/no-anonymous-default-export */

import { RetornoToken, Usuario } from '@/Components/Entidade/Login/Model';
import servicoAxios from '../lib/hooks/configAxios';
import { Retorno } from '../Model';
const api = servicoAxios();
type CadastroUsuario = (usuario: Usuario) => Promise<Retorno<Usuario>>;
type LoginUsuario = (usuario: Usuario) => Promise<RetornoToken>;
type LogarOuCadastrar = (usuario: Usuario, logar: boolean) => Promise<any>;

const postCadastroUsuario: CadastroUsuario = async (
  dados: Usuario
): Promise<Retorno<Usuario>> => {
  return await api
    .post<Retorno<Usuario>>('cadastro', dados)
    .then((res) => res.data)
    .catch((err) => err);
};

const postLoginUsuario: LoginUsuario = async (
  dados: Usuario
): Promise<RetornoToken> => {
  return await api
    .post<Retorno<Usuario>>('login', dados)
    .then((res) => res.data)
    .catch((err) => err);
};

const logarOuCadastrar: LogarOuCadastrar = async (
  dados: Usuario,
  logar: boolean
) => (!logar ? postLoginUsuario(dados) : postCadastroUsuario(dados));

export default { postCadastroUsuario, postLoginUsuario, logarOuCadastrar };
