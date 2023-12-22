import React from 'react';
import Image from 'next/image';
import { Container, CardMod, TituloHome } from './style';
import Titulo from '@/Components/Container/Titulo/style';
import CardAnimado from '@/Components/Card/CardAnimado';

const Home: React.FC = () => {
  const imagePaths = [
    '/imagem1.jpg',
    '/imagem4.jpeg',
    '/imagem2.jpg',
    // Adicione mais caminhos de imagem conforme necessário, por padrão já busca arquivos estáticos da pasta public.
  ];

  return (
    <Container>
      <TituloHome>Tudo sobre futebol</TituloHome>
      <div style={{ display: 'flex', gap: '5px' }}>
        {imagePaths.map((imagem) => (
          <CardMod key={imagem.toString()}>
            <Image src={imagem} alt="imagem futebol" width={400} height={400} />
          </CardMod>
        ))}
      </div>
    </Container>
  );
};

export default Home;
