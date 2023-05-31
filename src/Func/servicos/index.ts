/* eslint-disable import/no-anonymous-default-export */
import api from '../configAxios';

async function getDadosTabela() {
  const resultado = (await api.get('TabelaCampeonato')).data;
  return resultado;
}

async function postCadastroUsuario(dados: any) {
  const resultado = (await api.post('TabelaCampeonato', dados)).data;
  return resultado;
}

export default { getDadosTabela, postCadastroUsuario };
