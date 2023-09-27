/* eslint-disable import/no-anonymous-default-export */

import { Usuario } from '@/Components/Entidade/Login/Model';
import servicoAxios from '../lib/hooks/configAxios';
import { Retorno } from '../Model';
const api = servicoAxios();
type CadastroUsuario = (usuario: Usuario) => Promise<Retorno<Usuario>>;
type LoginUsuario = (usuario: Usuario) => Promise<Retorno<Usuario>>;
type LogarOuCadastrar = (
  usuario: Usuario,
  logar: boolean
) => Promise<Retorno<Usuario>>;

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
): Promise<Retorno<Usuario>> => {
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
