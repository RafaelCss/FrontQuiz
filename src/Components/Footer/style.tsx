import styled from 'styled-components';
import { Layout } from 'antd';
const {Footer} = Layout;


const FooterMod = styled(Footer)`
  text-align: center;
  color: #0a0909;
  height: 20vh;
  background-color:#24c32a;
 // background-image : url('data:image/jpeg;base64,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');
  background-attachment : fixed;
  background-repeat: initial;
  object-fit:cover;
`


export default FooterMod