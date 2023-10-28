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

type RespostaTabela = (
  accessToken: string
) => Promise<ApiResponse<ITabelaCampeonato[]>>;

const api = servicoAxios();
const getDadosTabela: RespostaTabela = async (accessToken: string) => {
  const resposta = await api.get<ApiResponse<ITabelaCampeonato[]>>('tabela', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return resposta.data;
};

export default { getDadosTabela };
