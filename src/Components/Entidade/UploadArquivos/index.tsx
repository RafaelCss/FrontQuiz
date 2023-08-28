import React, { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';

function UploadArquivos() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file as any);

      const response = await axios.post(
        'https://localhost:7050/GeradorPdfs',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      message.success(response.data, 3);
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
      message.success('Erro ao fazer upload:', 3);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Enviar PDF</button>
    </div>
  );
}

export default UploadArquivos;
