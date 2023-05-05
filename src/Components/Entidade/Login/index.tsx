import { Switch } from 'antd';
import ContainerFormulario from '../../Container/Formulario/style';
import Titulo from '../../Container/Titulo/style';
import Formulario from './formulario';
import { useState } from 'react';

const logar = 'Faça Login';
const cadastro = 'Realize seu cadastro';

function Pagina() {
  const [criarLogin, setCriarLogin] = useState<boolean>(false);

  const onChange = (checked: boolean) => {
    setCriarLogin(checked);
  };

  return (
    <ContainerFormulario>
      <Titulo>
        <div>
          <label>Não possuo cadastro!</label>
          <Switch checked defaultChecked onChange={onChange} />
        </div>
        <h2>Realize seu cadastro</h2>
      </Titulo>
      <Formulario />
    </ContainerFormulario>
  );
}

export default Pagina;
