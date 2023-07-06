/* eslint-disable import/no-anonymous-default-export */

import { Usuario } from '@/Components/Entidade/Login/Model';
import api from '../configAxios';
import { Retorno } from '../Model';

type CadastroUsuario = (usuario: Usuario) => Promise<Retorno<Usuario>>;
type LoginUsuario = (usuario: Usuario) => Promise<Retorno<Usuario>>;

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

export default { postCadastroUsuario, postLoginUsuario };
