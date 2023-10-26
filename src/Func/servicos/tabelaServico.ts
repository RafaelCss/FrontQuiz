/* eslint-disable import/no-anonymous-default-export */
import { ITabelaCampeonato } from '@/Components/Models';
import servicoAxios from '../lib/hooks/configAxios';

interface ApiResponse<T> {
  success: boolean;
  message: string;
  dados: T;
  totalCount: number;
  pageSize: number;
  pageIndex: number;
}

type RespostaTabela = () => Promise<ApiResponse<ITabelaCampeonato[]>>;

const api = servicoAxios().then((res) => res);
const getDadosTabela: RespostaTabela = async () => {
  const resposta = await (
    await api
  ).get<ApiResponse<ITabelaCampeonato[]>>('tabela');
  return resposta.data;
};

export default { getDadosTabela };
