import { Switch } from 'antd';
import ContainerFormulario from '../../Container/Formulario/style';
import Titulo from '../../Container/Titulo/style';
import Formulario from './formulario';
import { useEffect, useState } from 'react';

const logar = 'Faça Login:';
const cadastro = 'Realize seu cadastro:';

function Pagina() {
  const [checked, setChecked] = useState<boolean>(false);
  const [labelForm, setLabelForm] = useState<string>();

  useEffect(() => {
    if (checked) {
      setLabelForm(cadastro);
    } else {
      setLabelForm(logar);
    }
  }, [checked]);

  return (
    <ContainerFormulario>
      <Titulo>
        <h2>{labelForm}</h2>
      </Titulo>
      <Formulario setChecked={setChecked} checked={checked} />
    </ContainerFormulario>
  );
}

export default Pagina;
