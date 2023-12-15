/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { InputMod } from '@/Components/Input/style';
import { Button, Checkbox, Form, Input, Space, message } from 'antd';
import {
  Dispatch,
  SetStateAction,
  Validator,
  useCallback,
  useEffect,
  useState,
} from 'react';
import S from './style';
import servico from '@/Func/servicos/usuarioServico';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

import Erros, { Dictionary } from '@/Func/Model';
import { signIn } from 'next-auth/react';
//import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import type { ValidatorRule, Callbacks } from 'rc-field-form/lib/interface';
import {
  formFiltroErrors,
  formHandleErrors,
  formRuleErrorsServidor,
  transformErrorMessage,
} from '@/Func/lib/utius';
import Titulo from '@/Components/Container/Titulo/style';
import { Usuario } from '../Entidade/Cadastro/Model';

const placeHolder = (item: string) => `Digite ${item}`;
const logar = 'Faça Login:';
const cadastro = 'Realize seu cadastro:';
function Formulario() {
  const [form] = Form.useForm<Usuario>();
  const [erros, setErros] = useState<Dictionary<string[]>>({});
  const [tituloForm, setTituloForm] = useState<string>();

  function validarForm() {
    form
      .validateFields()
      .then(async (dados) => {
        signIn('credentials', {
          email: dados.email,
          senha: dados.senha,
          redirect: true,
          callbackUrl: '/',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function cancelarEnvio() {
    form.resetFields();
  }

  const renderErrors = useCallback(() => {
    const newlistaErrors = erros || {};
    const fieldsErrors = Object.keys(form.getFieldsValue()).map((key) => ({
      name: key,
      errors: formFiltroErrors(key, newlistaErrors),
    }));
    if (form) form.setFields(fieldsErrors);
  }, [erros]);
  useEffect(renderErrors, [renderErrors]);

  return (
    <S.MainFormulario>
      <Titulo>
        <h2>{logar}</h2>
      </Titulo>
      <Form
        id="form"
        form={form}
        layout="vertical"
        // requiredMark={requiredMark}
        onValuesChange={formHandleErrors(erros, setErros)}
        scrollToFirstError>
        <>
          <Form.Item
            name={['email']}
            label={'Email'}
            rules={[
              formRuleErrorsServidor(erros as any),
              { required: true, message: 'Email é obrigatório' },
            ]}>
            <InputMod
              id="input-email"
              name="email"
              placeholder={placeHolder('seu email')}
              autoComplete="off"
            />
          </Form.Item>
          <Form.Item
            name={['senha']}
            label={'Senha'}
            rules={[
              formRuleErrorsServidor(erros as any),
              { required: true, message: 'Senha é obrigatória' },
            ]}>
            <Input.Password
              id="input-senha"
              name="senha"
              placeholder={placeHolder('sua senha')}
              autoComplete="off"
              style={{ height: '4rem' }}
            />
          </Form.Item>
        </>
      </Form>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          marginTop: '5px',
        }}>
        <Space direction="horizontal">
          <Button id="btn-confirmar" onClick={validarForm}>
            Confirmar
          </Button>
          <Button onClick={cancelarEnvio}>Cancelar</Button>
        </Space>
      </div>
    </S.MainFormulario>
  );
}

export default Formulario;
