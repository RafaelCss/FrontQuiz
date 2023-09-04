import React from 'react';
import Image from 'next/image';
import { Corrosel } from './style';

const Home: React.FC = () => {
  const onChange = (currentSlide: number) => {};

  const imagePaths = [
    '/imagem1.jpg',
    '/imagem4.jpeg',
    '/imagem2.jpg',
    // Adicione mais caminhos de imagem conforme necessário, por padrão já busca arquivos estáticos da pasta public.
  ];

  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      {imagePaths.map((imagem) => (
        <Corrosel key={imagem.toString()}>
          <Image src={imagem} alt="imagem futebol" width={400} height={400} />
        </Corrosel>
      ))}
    </div>
  );
};

export default Home;
