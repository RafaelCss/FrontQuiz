/* eslint-disable @next/next/no-img-element */
import { ContainerTabela, Td, Th } from './style';
import {
  CheckOutlined,
  CloseOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';
import servico from '../../../Func/servicos/index';
function TabelaCampeonato() {
  const buscaDeDadosTabela: any = async () => {
    return await servico.getDadosTabela().then((res) => res);
  };

  return (
    <ContainerTabela>
      <h1>Tabela de Campeonato Brasileiro</h1>
      <table>
        <thead>
          <tr>
            <Th>Time</Th>
            <Th>Pontos</Th>
            <Th>Vitorias</Th>
            <Th>Empates</Th>
            <Th>Derrotas</Th>
            <Th>Gols marcados</Th>
            <Th>Gols sofridos</Th>
            <Th>Saldo-Gols</Th>
            <Th>Últimos jogos</Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>Botafogo</Td>
            <Td>
              <img
                src="https://cdn.api-futebol.com.br/escudos/638d349052558.svg"
                alt="Botafogo"
                width={20}
              />
            </Td>
            <Td>texto</Td>
            <Td>2</Td>
            <Td>2</Td>
            <Td>10</Td>
            <Td>5</Td>
            <Td>10</Td>
            <Td>
              <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <CloseOutlined style={{ color: '#f80808', fontSize: '13px' }} />
                <CheckOutlined style={{ color: '#52c41a', fontSize: '12px' }} />
                <MinusCircleOutlined
                  style={{ color: '#afb1aedb', fontSize: '12px' }}
                />
              </div>
            </Td>
          </tr>
        </tbody>
      </table>
    </ContainerTabela>
  );
}

export default TabelaCampeonato;
