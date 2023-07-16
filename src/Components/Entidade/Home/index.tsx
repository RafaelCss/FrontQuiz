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
    '/public/imagem1.jpg',
    '/public/imagem.jpeg',
    // Adicione mais caminhos de imagem conforme necessário
  ];

  return (
    <main
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '70vw',
        height: '100vh',
        flexDirection: 'column',
        position: 'relative',
      }}>
      <Carousel afterChange={onChange} autoplay>
        {imagePaths.map((imagem) => (
          <div key={imagem}>
            <Image
              src={imagem.toString()}
              alt="contentStyle"
              style={contentStyle}
              width={860}
              height={860}
            />
          </div>
        ))}
      </Carousel>
    </main>
  );
};

export default Home;
