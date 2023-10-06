/* eslint-disable react-hooks/exhaustive-deps */
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
import { Usuario } from '../Model';
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

const placeHolder = (item: string) => `Digite ${item}`;
const logar = 'Faça Login:';
const cadastro = 'Realize seu cadastro:';
function Formulario() {
  const [form] = Form.useForm<Usuario>();
  const [erros, setErros] = useState<Dictionary<string[]>>({});
  const [checked, setChecked] = useState<boolean>(false);
  const [tituloForm, setTituloForm] = useState<string>();

  useEffect(() => {
    if (checked) {
      setTituloForm(cadastro);
    } else {
      setTituloForm(logar);
    }
  }, [checked]);

  function validarForm() {
    form
      .validateFields()
      .then(async (dados) => {
        signIn('Credentials', {
          ...dados,
          redirect: false,
        });
        // if (resposta.sucesso) {
        //   message.success('Usuario cadastrado');
        //   setErros({});
        //   return;
        // } else {
        //   message.error(resposta.message);
        //   console.log(resposta.erros);
        //   setErros(transformErrorMessage(resposta.erros as any));
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function cancelarEnvio() {
    form.resetFields();
  }

  const onChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

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
        <h2>{tituloForm}</h2>
      </Titulo>
      <Form
        id="form"
        form={form}
        layout="vertical"
        // requiredMark={requiredMark}
        onValuesChange={formHandleErrors(erros, setErros)}
        scrollToFirstError>
        {checked && (
          <Form.Item
            name={['nome']}
            label="Nome"
            rules={[
              formRuleErrorsServidor(erros as any),
              { required: true, message: 'Nome é obrigatório' },
            ]}
            required>
            <InputMod
              name="nome"
              id="input-nome"
              placeholder={placeHolder('seu usuário')}
              autoComplete="off"
            />
          </Form.Item>
        )}
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
        <Form.Item name={'checked'} style={{ marginTop: '5px' }}>
          <Checkbox checked={checked} onChange={onChange}>
            Não possuo cadastro.
          </Checkbox>
        </Form.Item>
      </Form>
    </S.MainFormulario>
  );
}

export default Formulario;
