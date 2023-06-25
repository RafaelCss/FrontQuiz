/* eslint-disable import/no-anonymous-default-export */

import { ITabelaCampeonato } from '@/Components/Entidade/Campeonato';
import api from '../configAxios';
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  totalCount: number;
  pageSize: number;
  pageIndex: number;
}

const getDadosTabela = async () => {
  return await api
    .get<ApiResponse<ITabelaCampeonato[]>>('tabela')
    .then((res) => res.data)
    .catch((err) => err);
};

export default { getDadosTabela };
