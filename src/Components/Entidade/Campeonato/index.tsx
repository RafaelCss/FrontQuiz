/* eslint-disable @next/next/no-img-element */
import { ContainerTabela, Td, Th } from './style';
import {
  CheckOutlined,
  CloseOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';

import useSWR, { mutate } from 'swr';

import servico from '@/Func/servicos/tabelaServico';
import { useEffect, useState } from 'react';
import { Space } from 'antd';
import { ITabelaCampeonato } from '@/Components/Models';
function TabelaCampeonato() {
  const {
    data: data,
    error,
    isLoading,
    mutate,
  } = useSWR('Tabela', async () => servico.getDadosTabela());
  console.log('data', data);
  const dadosTabela: ITabelaCampeonato[] = data?.data || [];
  console.log('data2', data?.data);
  console.log('dadosTabela', dadosTabela);
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
          {dadosTabela.map((time) => (
            <tr key={time._Id}>
              <Td>
                <Space direction="horizontal" style={{ display: 'flex' }}>
                  {time.posicao}
                  <img src={time?.time?.escudo} alt="Botafogo" width={20} />
                  {time?.time?.nome_popular}
                </Space>
              </Td>
              <Td>{time.pontos}</Td>
              <Td>{time.vitorias}</Td>
              <Td>{time.empates}</Td>
              <Td>{time.derrotas}</Td>
              <Td>{time.gols_pro}</Td>
              <Td></Td>
              <Td>{time.saldo_gols}</Td>
              <Td>
                {time.ultimos_jogos?.map((item) => {
                  return (
                    <>
                      {item === 'd' && (
                        <CloseOutlined
                          rev={{}}
                          style={{
                            color: '#f80808',
                            fontSize: '13px',
                            margin: '1px 1px',
                          }}
                        />
                      )}
                      {item === 'v' && (
                        <CheckOutlined
                          rev={{}}
                          style={{
                            color: '#52c41a',
                            fontSize: '12px',
                            margin: '1px 1px',
                          }}
                        />
                      )}
                      {item === 'e' && (
                        <MinusCircleOutlined
                          rev={{}}
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
        </tbody>
      </table>
    </ContainerTabela>
  );
}

export default TabelaCampeonato;
