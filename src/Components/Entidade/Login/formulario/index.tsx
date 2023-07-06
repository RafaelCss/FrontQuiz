import { InputMod } from '@/Components/Input/style';
import { Button, Checkbox, Form, Input, Space, message } from 'antd';
import { Dispatch, SetStateAction, Validator, useState } from 'react';
import MainFormulario from './style';
import servico from '@/Func/servicos/usuarioServico';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Usuario } from '../Model';
import type { ValidatorRule } from 'rc-field-form/lib/interface';
import Erros, { Dictionary } from '@/Func/Model';
import { RuleObject } from 'antd/es/form';
//import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

interface IFormulario {
  setChecked: Dispatch<SetStateAction<boolean>>;
  checked: boolean;
}
interface Erro {
  [key: string]: string;
}
const placeHolder = (item: string) => `Digite ${item}`;

function Formulario({ setChecked, checked }: IFormulario) {
  const [form] = Form.useForm<Usuario>();
  const [erros, setErros] = useState<Erro[]>();

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
          setErros([]);
          return;
        }
        message.error(resposta.message);
        setErros(resposta.erros as any);
        console.log(resposta);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //   console.log(erros)
  //  const formRuleErrorsServidor = (errors: Erros[]): ValidatorRule => ({
  //    validator: async rule => {'
  //     console.log(rule)
  //      if (!errors) return;
  //     const {field} = rule as {field : string}
  //  if (errors.field[0]) {
  //       throw new Error(errors.field);
  //     }

  //     if (errors[field]) {
  //       throw new Error(errors[field][0]);
  //     }
  //   }
  // });

  const validateCustom = (erros: Erro[]): RuleObject => ({
    validator(rule, value) {
      try {
        const { field } = rule as { field: string };
        const err = erros?.filter((item) => item[field]);
        console.log(Object.keys(erros).toString());
        if (field) {
          return Promise.reject(
            err.map((item) => new Error(`Erro no campo ${item[0]}`))
          ); // Reject the promise with an array of Error objects
        }

        return Promise.resolve(); // Resolve the promise if validation is successful
      } catch (err) {
        console.error(err);
        return Promise.reject(new Error('Ocorreu um erro')); // Reject the promise with a generic Error object
      }
    },
  });

  function cancelarEnvio() {
    form.resetFields();
  }

  const onChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  return (
    <MainFormulario>
      <Form
        id="form"
        form={form}
        layout="vertical"
        // requiredMark={requiredMark}
        onValuesChange={(e) => console.log(e)}
        scrollToFirstError>
        {checked && (
          <Form.Item
            name={['nome']}
            label="Nome"
            rules={[
              validateCustom(erros as any),
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
            validateCustom(erros as any),
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
            validateCustom(erros as any),
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
