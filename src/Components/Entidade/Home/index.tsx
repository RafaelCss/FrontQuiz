import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Home: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const imagePaths = [
    '/imagem1.jpg',
    '/imagem4.jpeg',
    '/imagem2.jpg',
    // Adicione mais caminhos de imagem conforme necessário, por padrão já busca arquivos estáticos da pasta public.
  ];

  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '70vw',
        height: '100vh',
        flexDirection: 'column',
      }}>
      <Carousel afterChange={onChange} autoplay>
        {imagePaths.map((imagem) => (
          <div key={imagem}>
            <Image
              src={imagem}
              alt="contentStyle"
              style={contentStyle}
              width={800}
              height={800}
            />
          </div>
        ))}
      </Carousel>
    </main>
  );
};

export default Home;
