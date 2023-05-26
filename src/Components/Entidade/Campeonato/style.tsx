import styled from 'styled-components';

export const ContainerTabela = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 80vw;
  padding-top: 180px;
  align-items: center;
  background-color: black;
`;

export const Td = styled.td`
  text-align: center;
  border: dashed 1px #d4d4cff4;
`;

export const Th = styled.th`
  text-align: center;
  border: solid 1px #d4d4cff4;
  margin-bottom: 5px;
`;
