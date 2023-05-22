import { ContainerTabela, CelulaTabela } from './style';

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
        <tbody>
          <tr>
            <CelulaTabela>Flamengo</CelulaTabela>
            <CelulaTabela>15</CelulaTabela>
            <CelulaTabela>3</CelulaTabela>
            <CelulaTabela>2</CelulaTabela>
            <CelulaTabela>2</CelulaTabela>
            <CelulaTabela>10</CelulaTabela>
            <CelulaTabela>5</CelulaTabela>
            <CelulaTabela>10</CelulaTabela>
            <CelulaTabela>10</CelulaTabela>
          </tr>
        </tbody>
      </table>
    </ContainerTabela>
  );
}

export default TabelaCampeonato;
