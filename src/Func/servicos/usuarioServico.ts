/* eslint-disable import/no-anonymous-default-export */

import { Usuario } from '@/Components/Entidade/Login/Model';
import api from '../configAxios';
import { Retorno } from '../Model';

const postCadastroUsuario = async (
  dados: Usuario
): Promise<Retorno<Usuario>> => {
  return await api
    .post<Retorno<Usuario>>('cadastro', dados)
    .then((res) => res.data)
    .catch((err) => err);
};

export default { postCadastroUsuario };
