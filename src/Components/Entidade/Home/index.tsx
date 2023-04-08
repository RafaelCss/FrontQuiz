import React from 'react';
import { Carousel } from 'antd';
import ContainerLista from '../../Container/Lista/style';

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
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </main>
  );
};

export default Home;
