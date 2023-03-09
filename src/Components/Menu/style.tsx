import { Button } from 'antd';
import styled from 'styled-components';

interface IButtonMod {
  btnFundoColor?: string;
}

const ContainerMenu = styled.div`
  display: flex;
  width:70vw;
  height:30vh;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const ButtonMod = styled.div`
  display : flex;
  justify-content: center;
  align-items:center;
  text-align:center;
  width:80px;
  font-family: 'Tilt Warp', cursive;
  font-size:1.2rem;
  &:hover{
    color:#ec7676d8;
    transition: 0.5s;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { ContainerMenu, ButtonMod };
