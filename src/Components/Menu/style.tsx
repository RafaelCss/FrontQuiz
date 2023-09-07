import { Button } from 'antd';
import styled from 'styled-components';

interface IButtonMod {
  btnFundoColor?: string;
}

const ContainerMenu = styled.div`
  display: flex;
  width: 50vw;
  height: 10vh;
  flex-direction: row;
  align-items: center;
  margin: 0px 2rem;
  justify-content: space-evenly;
`;

const ButtonMod = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100px;
  height: 40px;
  border-radius: 10%;
  color: white;
  font-family: 'Tilt Warp', cursive;
  font-size: 1.5rem;
  border: none;
  background-color: transparent;
  text-decoration: none;
  &:hover {
    background-color: #c3f5be21;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { ContainerMenu, ButtonMod };
