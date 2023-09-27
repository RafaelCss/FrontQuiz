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
const api = servicoAxios();
const getDadosTabela: RespostaTabela = () => {
  return api
    .get<ApiResponse<ITabelaCampeonato[]>>('tabela')
    .then((res) => res.data)
    .catch((err) => err);
};

export default { getDadosTabela };
