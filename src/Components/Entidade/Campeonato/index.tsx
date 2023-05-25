/* eslint-disable @next/next/no-img-element */
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
            <th>Empates</th>
            <th>Derrotas</th>
            <th>Gols marcados</th>
            <th>Gols sofridos</th>
            <th>Saldo-Gols</th>
            <th>Últimos jogos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <CelulaTabela>Botafogo</CelulaTabela>
            <CelulaTabela>
              <img
                src="https://cdn.api-futebol.com.br/escudos/638d349052558.svg"
                alt="Botafogo"
                width={20}
              />
            </CelulaTabela>
            <CelulaTabela>texto</CelulaTabela>
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
