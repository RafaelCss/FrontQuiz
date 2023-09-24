import styled from 'styled-components';
import { Layout } from 'antd';
import CampoDeFutebol from './Campo2.png';
const { Content } = Layout;

const ContentMod = styled(Content)`
  display: flex;
  color: #fff5f5;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: black;
  overflow: hidden;
`;

export default ContentMod;
