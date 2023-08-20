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
import MainFormulario from './style';
import servico from '@/Func/servicos/usuarioServico';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Usuario } from '../Model';
import Erros, { Dictionary } from '@/Func/Model';

//import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import type { ValidatorRule, Callbacks } from 'rc-field-form/lib/interface';
import {
  formFiltroErrors,
  formHandleErrors,
  formRuleErrorsServidor,
  transformErrorMessage,
} from '@/Func/lib/utius';
interface IFormulario {
  setChecked: Dispatch<SetStateAction<boolean>>;
  checked: boolean;
}

const placeHolder = (item: string) => `Digite ${item}`;

function Formulario({ setChecked, checked }: IFormulario) {
  const [form] = Form.useForm<Usuario>();
  const [erros, setErros] = useState<Dictionary<string[]>>({});

  function validarForm() {
    form
      .validateFields()
      .then(async (dados) => {
        const resposta = await servico.postCadastroUsuario(dados);
        if (resposta.sucesso) {
          message.success('Usuario cadastrado');
          setErros({});
          return;
        }
        message.error(resposta.message);
        console.log(resposta.erros);
        setErros(transformErrorMessage(resposta.erros as any));
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
    <MainFormulario>
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
          style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <Space direction="horizontal">
            <Button id="btn-confirmar" onClick={validarForm}>
              Confirmar
            </Button>
            <Button onClick={cancelarEnvio}>Cancelar</Button>
          </Space>
        </div>
        <Form.Item name={'checked'}>
          <Checkbox checked={checked} onChange={onChange}>
            Não possuo cadastro.
          </Checkbox>
        </Form.Item>
      </Form>
    </MainFormulario>
  );
}

export default Formulario;
