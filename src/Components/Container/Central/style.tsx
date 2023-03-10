import styled from 'styled-components';
import { Layout } from 'antd';
import CampoDeFutebol from './Campo2.png';
const { Content } = Layout;

const ContentMod = styled(Content)`
  display: block;
  text-align: center;
  color: #0a0909;
  height: 100vh;
  // background-color:#2bde2563;
  background-attachment: fixed;
  background-repeat: initial;
  object-fit: cover;
  background-image: url(${CampoDeFutebol.src});
  background-repeat: no-repeat;
  // background-attachment: scroll;
`;

export default ContentMod;
