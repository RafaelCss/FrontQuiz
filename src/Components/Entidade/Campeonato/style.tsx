import styled from 'styled-components';

export const ContainerTabela = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  //padding-top: 300px;
  background-color: green;
  align-items: center;
  background-color: black;
  margin-top: 50px;
  overflow: hidden;
`;

export const Td = styled.td`
  text-align: center;
  padding: 3px 10px;
  // border: dashed 1px #d4d4cff4;
  width: 5rem;
  height: 1.5rem;
`;

export const Th = styled.th`
  text-align: center;
  padding: 3px 10px;
  border: solid 1px #d4d4cff4;
  margin-bottom: 5px;
  width: 5rem;
  height: 1.5rem;
`;
