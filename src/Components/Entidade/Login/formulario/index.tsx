import { InputMod } from '@/Components/Input/style';
import { Button, Checkbox, Form, Input, Space } from 'antd';
import { RequiredMark } from 'antd/es/form/Form';
import { Dispatch, SetStateAction, useState } from 'react';
import MainFormulario from './style';

import { CheckboxChangeEvent } from 'antd/es/checkbox';
//import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

interface IFormulario {
  setChecked: Dispatch<SetStateAction<boolean>>;
  checked: boolean;
}

const placeHolder = (item: string) => `Digite ${item}`;

function Formulario({ setChecked, checked }: IFormulario) {
  const [form] = Form.useForm<IFormulario>();
  const [requiredMark, setRequiredMarkType] =
    useState<RequiredMark>('optional');

  const onRequiredTypeChange = ({
    requiredMarkValue,
  }: {
    requiredMarkValue: RequiredMark;
  }) => {
    setRequiredMarkType(requiredMarkValue);
  };
  function validarForm() {
    form.validateFields().then((dados) => {
      console.log(dados);
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

  return (
    <MainFormulario>
      <Form
        id="form"
        form={form}
        layout="vertical"
        requiredMark={requiredMark}
        onValuesChange={onRequiredTypeChange}>
        {checked && (
          <Form.Item
            name={['nome']}
            label="Nome"
            rules={[{ required: true, message: 'Nome é obrigatório' }]}>
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
          rules={[{ required: true, message: 'Email é obrigatório' }]}>
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
            style={{ height: '4rem', border: 'none' }}
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
