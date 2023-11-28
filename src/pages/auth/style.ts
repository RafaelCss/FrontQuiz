import { Button } from 'antd';
import styled from 'styled-components';

const ContainerFormulario = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: 30%;
  height: 30rem;

  color: white;
`;

const BotaoLogin = styled(Button)`
  width: 20rem;
`;

export default { ContainerFormulario, BotaoLogin };
