import { Button, Form as FormAntd } from 'antd';
import styled from 'styled-components';

const MainFormulario = styled.main`
  display: flex;
  width: 65rem;
  height: 50%;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem 2rem;
  padding: 2rem 2rem;
  box-sizing: border-box;
  .ant-form-item-label > label {
    color: white;
  }
  .ant-checkbox + span {
    color: white;
  }
  .ant-input:placeholder-shown {
    color: black;
  }
  background-color: #3031302d;
`;
const BotaoLogin = styled(Button)`
  width: 20rem;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { MainFormulario, BotaoLogin };
