import React from 'react';
import { Carousel } from 'antd';

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
    '../../../../public/image1.jpg',
    '../../../../public/image2.jpg',
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
            <img src={imagem} alt="contentStyle" style={contentStyle} />
          </div>
        ))}
      </Carousel>
    </main>
  );
};

export default Home;
