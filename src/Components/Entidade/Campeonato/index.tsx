import { ContainerTabela } from './style';

function TabelaCampeonato() {
  return (
    <ContainerTabela>
      <h1>Tabela de Campeonato Brasileiro</h1>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Pontos</th>
            <th>Vitorias</th>
            <th>Derrotas</th>
            <th>Empates</th>
            <th>Gols marcados</th>
            <th>Gols sofridos</th>
            <th>Saldo-Gols</th>
            <th>Últimos jogos</th>
          </tr>
        </thead>
      </table>
    </ContainerTabela>
  );
}

export default TabelaCampeonato;
