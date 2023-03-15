import styled from 'styled-components';
import { Layout } from 'antd';
import CampoDeFutebol from './Campo2.png';
const { Content } = Layout;

const ContentMod = styled(Content)`
  display: block;
  color: #fff5f5;
  height: 100vh;
  background-size: cover;
  background-position: center;
 // background-attachment: fixed;
 // object-fit: cover;
  background-image: url(${CampoDeFutebol.src});
 // background-repeat:no-repeat;
//  background-attachment: scroll;
`;

export default ContentMod;
