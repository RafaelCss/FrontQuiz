import React from 'react';
import axios from 'axios';

function DownloadArquivos() {
  const handleDownload = async (fileName: string) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL_API_URL_ARQUIVOS}${fileName}`,
        {
          headers: {
            Accept: 'application/octet-stream',
          },
          responseType: 'arraybuffer', // Use responseType: 'arraybuffer'
        }
      );
      console.log(response);
      const blob = new Blob([response.data], {
        type: 'application/octet-stream',
      });

      // Cria uma URL temporária para o blob
      const url = window.URL.createObjectURL(blob);

      // Cria um link de download e o aciona
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Libera a URL temporária
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Erro ao fazer o download:', error);
    }
  };
  // TODO:retirar esse arquivo do projeto
  return (
    <div>
      <button onClick={() => handleDownload('video.mp4')}>Baixar PDF</button>
    </div>
  );
}

export default DownloadArquivos;
