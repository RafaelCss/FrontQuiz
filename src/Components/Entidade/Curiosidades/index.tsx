import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import React from 'react';
import ContainerLista from '../../Container/Lista/style';

const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: `https://joesch.moe/api/v1/random?key=${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function ListaPerguntas() {
  return <ContainerLista></ContainerLista>;
}

export default ListaPerguntas;
