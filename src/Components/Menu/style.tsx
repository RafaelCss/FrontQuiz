import { Button } from 'antd';
import styled from 'styled-components';

interface IButtonMod {
  btnFundoColor?: string;
}

const ContainerMenu = styled.div`
  display: flex;
  margin-top: 3rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ButtonMod = styled.button`
  border-radius: 50%;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { ContainerMenu, Button };
