/* eslint-disable @next/next/no-img-element */
import { ContainerTabela, Td, Th } from './style';
import {
  CheckOutlined,
  CloseOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';

import useSWR from 'swr';
interface Time {
  timeId: number;
  nomePopular: string;
  sigla: string;
  escudo: string;
}

interface Id {
  timestamp: number;
  machine: number;
  pid: number;
  increment: number;
  creationTime: string;
}

export interface ITabelaCampeonato {
  posicao: number;
  pontos: number;
  time: Time;
  jogos: number;
  vitorias: number;
  empates: number;
  derrotas: number;
  golsPro: number;
  golsContra: number;
  saldoGols: number;
  aproveitamento: number;
  variacaoPosicao: number;
  ultimosJogos: string[];
  _Id: Id;
  dataDeCriacao: string;
  notifications: any[];
  isValid: boolean;
}
import servico from '@/Func/servicos/tabelaServico';
import { useEffect, useState } from 'react';
import { Space } from 'antd';
function TabelaCampeonato() {
  const {
    data: dados,
    error,
    isLoading,
  } = useSWR('Tabela', async () => await servico.getDadosTabela());

  const [dadosTabela, setDadosTabela] = useState<ITabelaCampeonato[]>(
    dados?.data?.tabela
  );

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
          {dadosTabela &&
            dadosTabela.map((time) => (
              <tr key={time._Id.pid}>
                <Td>
                  <Space direction="horizontal" style={{ display: 'flex' }}>
                    {time.posicao}
                    <img src={time.time.escudo} alt="Botafogo" width={20} />
                    {time.time.nomePopular}
                  </Space>
                </Td>
                <Td>{time.pontos}</Td>
                <Td>{time.vitorias}</Td>
                <Td>{time.empates}</Td>
                <Td>{time.derrotas}</Td>
                <Td>{time.golsPro}</Td>
                <Td></Td>
                <Td>{time.saldoGols}</Td>
                <Td>
                  {time.ultimosJogos.map((item) => {
                    return (
                      <>
                        {item === 'd' && (
                          <CloseOutlined
                            style={{
                              color: '#f80808',
                              fontSize: '13px',
                              margin: '1px 1px',
                            }}
                          />
                        )}
                        {item === 'v' && (
                          <CheckOutlined
                            style={{
                              color: '#52c41a',
                              fontSize: '12px',
                              margin: '1px 1px',
                            }}
                          />
                        )}
                        {item === 'e' && (
                          <MinusCircleOutlined
                            style={{
                              color: '#afb1aedb',
                              fontSize: '12px',
                              margin: '1px 1px',
                            }}
                          />
                        )}
                      </>
                    );
                  })}
                </Td>
              </tr>
            ))}
          {/* <Td>Botafogo</Td>
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
            </Td> */}
        </tbody>
      </table>
    </ContainerTabela>
  );
}

export default TabelaCampeonato;
