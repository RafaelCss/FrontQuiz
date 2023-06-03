/* eslint-disable @next/next/no-img-element */
import { ContainerTabela, Td, Th } from './style';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
function TabelaCampeonato() {
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
              <CloseOutlined style={{ color: '#f80808' }} />
              <CheckOutlined style={{ color: '#52c41a' }} />
            </Td>
          </tr>
        </tbody>
      </table>
    </ContainerTabela>
  );
}

export default TabelaCampeonato;
