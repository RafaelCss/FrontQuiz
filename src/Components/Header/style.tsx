import styled from 'styled-components';
import { Layout } from 'antd';
const { Header } = Layout;

const HeaderMod = styled(Header)`
  display: flex;
  position: fixed;
  color: #fefefe;
  height: 10vh;
  width: 100vw;
  justify-content: space-evenly;
  background: rgba(45, 42, 42, 0.12);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.8px);
  -webkit-backdrop-filter: blur(3.8px);
  border: 1px solid rgba(35, 230, 91, 0.01);
  z-index: 10;
`;

export default HeaderMod;
