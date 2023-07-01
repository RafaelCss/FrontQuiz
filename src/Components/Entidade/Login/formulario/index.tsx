import { InputMod } from '@/Components/Input/style';
import { Button, Checkbox, Form, Input, Space, message } from 'antd';
import { RequiredMark } from 'antd/es/form/Form';
import { Dispatch, SetStateAction, useState } from 'react';
import MainFormulario from './style';
import servico from '@/Func/servicos/usuarioServico';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Usuario } from '../Model';
import { Rule } from 'antd/es/form';
import Erros from '@/Func/Model';
//import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

interface IFormulario {
  setChecked: Dispatch<SetStateAction<boolean>>;
  checked: boolean;
}

const placeHolder = (item: string) => `Digite ${item}`;

function Formulario({ setChecked, checked }: IFormulario) {
  const [form] = Form.useForm<Usuario>();
  const [erros, setErros] = useState<Erros[]>();
  function validarForm() {
    form.validateFields().then(async (dados) => {
      const resposta = await servico.postCadastroUsuario(dados);
      if (resposta.sucesso) {
        message.success('Usuario cadastrado');
      }
      message.error(resposta.message);
      setErros(resposta.erros);
    });
  }

  function cancelarEnvio() {
    form.resetFields();
  }

  const errosCampos = {
    message: 'este campo é invalido',
  };

  const onChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked);
  };

  function ValidatorErrosFormulario(listaErros: any): Rule {
    return {
      message: 'teste',
      warningOnly: true,
    };
  }

  return (
    <MainFormulario>
      <Form
        id="form"
        form={form}
        layout="vertical"
        // requiredMark={requiredMark}
        // onValuesChange={onRequiredTypeChange}
      >
        {checked && (
          <Form.Item
            name={['nome']}
            label="Nome"
            rules={[{ required: true, message: 'Nome é obrigatório' }]}
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
            ValidatorErrosFormulario('teste'),
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
          rules={[{ required: true, message: 'Senha é obrigatória' }]}>
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
