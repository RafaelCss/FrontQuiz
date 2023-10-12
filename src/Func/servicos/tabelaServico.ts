/* eslint-disable import/no-anonymous-default-export */
import { ITabelaCampeonato } from '@/Components/Models';
import servicoAxios from '../lib/hooks/configAxios';
('Client');
interface ApiResponse<T> {
  success: boolean;
  message: string;
  dados: T;
  totalCount: number;
  pageSize: number;
  pageIndex: number;
}

type RespostaTabela = () => Promise<any[]>;

const api = servicoAxios();
const getDadosTabela: RespostaTabela = async () => {
  const resposta = await api.get<any[]>('tabela');
  return resposta.data;
};

export default { getDadosTabela };
