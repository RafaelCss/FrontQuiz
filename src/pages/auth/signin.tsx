import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { getProviders, signIn } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';
import { Button, Form, Input } from 'antd';

export default function SignIn() {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      signIn('credentials', {
        email: values.email,
        senha: values.senha,
        redirect: true,
        callbackUrl: '/Campeonato',
      });
    });
  };

  return (
    <>
      <Form form={form}>
        <Form.Item label={'Email'} name={'email'}>
          <Input type="email" />
        </Form.Item>
        <Form.Item label={'Senha'} name={'senha'}>
          <Input type="password" />
        </Form.Item>
        <Button onClick={handleSubmit}>Login</Button>
      </Form>
    </>
  );
}
