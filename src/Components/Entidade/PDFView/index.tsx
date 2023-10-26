import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { CSSProperties } from 'styled-components';

function PDFView() {
  const [blobURL, setBlobURL] = useState(null);

  const handleDisplayPDF = async (fileName: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL_API_URL_ARQUIVOS}${fileName}`,
        {
          headers: {
            Accept: 'application/pdf', // Use 'application/pdf' for PDF files
          },
          responseType: 'arraybuffer', // Use responseType: 'arraybuffer'
        }
      );
      const blob = new Blob([response.data], {
        type: 'application/pdf', // Use 'application/pdf' for PDF files
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
    handleDisplayPDF('seuarquivo.pdf');
  }, []);

  const centerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };
  return (
    <div style={centerStyle}>
      {blobURL && (
        <iframe
          src={blobURL}
          width="800"
          height="800"
          style={{
            border: 'none', // Remova qualquer borda   // Remova qualquer preenchimento
            display: 'block', // Garanta que o iframe ocupe o espaço inteiro    // Defina a altura do cabeçalho como zero
          }}></iframe>
      )}
    </div>
  );
}

export default PDFView;
