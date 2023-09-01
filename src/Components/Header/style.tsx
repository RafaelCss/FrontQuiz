import styled from 'styled-components';
import { Layout } from 'antd';
const { Header } = Layout;

const HeaderMod = styled(Header)`
  display: flex;
  position: relative;
  color: #fefefe21;
  height: 30%;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background: rgba(17, 63, 17, 0.637);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.8px);
  -webkit-backdrop-filter: blur(3.8px);
  border: 1px solid rgba(19, 233, 80, 0.01);
  z-index: 10;
`;

export default HeaderMod;
