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
import _, {
  isArray,
  isBoolean,
  isDate,
  isEmpty,
  isEqual,
  isFunction,
  isNil,
  isObject,
  isString,
  parseInt,
} from 'lodash';
//import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import type { ValidatorRule, Callbacks } from 'rc-field-form/lib/interface';
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
        //   if(checked){
        //   const resposta = await servico.postLoginUsuario(dados);
        //    if (resposta.sucesso) {
        //       message.success('Usuario cadastrado');
        //     }
        //   message.error(resposta.message);
        //   setErros(resposta.erros);
        //   return
        // }
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
  const primeiraLetraMaiuscula = (texto: string): string =>
    texto ? texto[0].toUpperCase() + texto.slice(1) : texto;

  const primeiraLetraMinuscula = (texto: string): string =>
    texto ? texto[0].toLowerCase() + texto.slice(1) : texto;

  const formRuleErrorsServidor = (
    errors: Dictionary<string[]>
  ): ValidatorRule => ({
    validator: async (rule) => {
      if (!errors) return;
      const { field } = rule as { field: string };
      if (errors[primeiraLetraMinuscula(field)]) {
        throw new Error(errors[primeiraLetraMinuscula(field)][0]);
      }

      if (errors[primeiraLetraMaiuscula(field)]) {
        throw new Error(errors[primeiraLetraMaiuscula(field)][0]);
      }
    },
  });
  interface ErrorMessage {
    property: string;
    message: string;
  }
  function transformErrorMessage(errors: ErrorMessage[]): {
    [key: string]: string[];
  } {
    const transformedErrors: { [key: string]: string[] } = {};

    for (const error of errors) {
      if (transformedErrors.hasOwnProperty(error.property)) {
        transformedErrors[error.property].push(error.message);
      } else {
        transformedErrors[error.property] = [error.message];
      }
    }

    return transformedErrors;
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

  const formFiltroErrors = (
    chave: string,
    errors: Dictionary<string[]>
  ): string[] => {
    const errosChave: string[] = [];

    if (!errors) {
      return errosChave;
    }

    if (errors[primeiraLetraMaiuscula(chave)]) {
      errosChave.push(...errors[primeiraLetraMaiuscula(chave)]);
    }

    if (errors[primeiraLetraMinuscula(chave)]) {
      errosChave.push(...errors[primeiraLetraMinuscula(chave)]);
    }

    return errosChave.filter((erro) => erro !== null && erro !== undefined);
  };

  const formHandleErrors =
    (
      errors: Dictionary<string[]>,
      setErrors: Dispatch<SetStateAction<Dictionary<string[]>>>
    ): Callbacks<unknown>['onValuesChange'] =>
    (changedValues, values) => {
      if (isEmpty(errors)) {
        return;
      }

      const novoErrors = { ...errors };
      Object.keys(changedValues).forEach((nomeCampo) => {
        if (nomeCampo) {
          delete novoErrors[primeiraLetraMaiuscula(nomeCampo)];
          delete novoErrors[primeiraLetraMinuscula(nomeCampo)];
        }
      });
      setErrors(novoErrors);
    };
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
