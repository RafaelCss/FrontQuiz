'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DivCenterStyle, IFrame } from './style';

function PDFView() {
  const [blobURL, setBlobURL] = useState(null);

  const handleDisplayPDF = async () => {
    try {
      const response = await axios.get(`https://`, {
        headers: {
          Accept: 'application/pdf',
        },
        responseType: 'arraybuffer',
      });
      const blob = new Blob([response.data], {
        type: 'application/pdf',
        endings: 'native',
      });

      // Cria uma URL temporária para o blob
      const url = URL.createObjectURL(blob);
      // Define o URL do blob para ser exibido na tela
      setBlobURL(url as any);
    } catch (error) {
      console.error('Erro ao exibir o PDF:', error);
    }
  };

  useEffect(() => {
    handleDisplayPDF();
  }, []);

  return (
    <DivCenterStyle>
      {blobURL && <IFrame src={blobURL} title="Meu iFrame" />}
    </DivCenterStyle>
  );
}

export default PDFView;
