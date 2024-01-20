import React, { useState } from 'react';
import Image from 'next/image';
import { InfoCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';

interface PropsCardAnimado {
  imagemCaminho: string;
}

const CardAnimado = ({ imagemCaminho }: PropsCardAnimado) => {
  const [virado, setVirado] = useState(false);

  const handleClick = () => {
    setVirado(!virado);
  };

  return (
    <div
      style={{
        perspective: '100px',
        width: '400px',
        height: '400px',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.5s',
        transform: virado ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}
      onClick={handleClick}>
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          backfaceVisibility: 'hidden',
        }}>
        {/* Frente do card */}
        <div
          style={{
            display: 'Flex',
            justifyContent: 'space-around',
          }}>
          <Image
            src={imagemCaminho}
            alt="imagem futebol"
            width={100}
            height={100}
          />
          <InfoCircleOutlined rev={undefined} />
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          transform: 'rotateY(180deg)',
          backfaceVisibility: 'hidden',
        }}>
        <div
          style={{
            display: 'Flex',
            justifyContent: 'space-around',
          }}>
          <LeftCircleOutlined rev={undefined} />
        </div>
        {/* Verso do card */}
        Teste seus conhecimentos aqui
      </div>
    </div>
  );
};

export default CardAnimado;
