import { InputMod, InputPasswordMod } from '@/src/Components/Input/style';
import { Button, Form, Input, Space } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useState } from 'react';
//import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

interface IFormulario {
  nome?: string;
  email?: string;
  senha?: string;
}

const placeHolder = (item: string) => `Digite ${item}`;

function Formulario() {
  const [form] = Form.useForm<IFormulario>();

  function validarForm() {
    form.validateFields().then((dados) => {
      console.log(dados);
    });
  }

  function cancelarEnvio() {
    form.resetFields();
  }

  return (
    <Form id="form" form={form}>
      <Form.Item name={['nome']} label="Nome" rules={[{ required: true }]}>
        <InputMod
          name="nome"
          placeholder={placeHolder('seu usuário')}
          autoComplete="off"
        />
      </Form.Item>
      <Form.Item name={['email']} label={'Email'} rules={[{ required: true }]}>
        <InputMod
          name="email"
          placeholder={placeHolder('seu email')}
          autoComplete="off"
        />
      </Form.Item>
      <Form.Item name={['senha']} label={'Senha'} rules={[{ required: true }]}>
        <Input.Password
          name="senha"
          placeholder={placeHolder('sua senha')}
          autoComplete="off"
        />
      </Form.Item>
      <Space direction="horizontal">
        <div
          style={{ width: '500px', display: 'flex', justifyContent: 'center' }}>
          <Space direction="horizontal">
            <Button onClick={validarForm}>Confirmar</Button>
            <Button onClick={cancelarEnvio}>Cancelar</Button>
          </Space>
        </div>
      </Space>
    </Form>
  );
}

export default Formulario;
