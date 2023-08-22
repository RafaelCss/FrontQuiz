import Formulario from './formulario';
import { useEffect, useState } from 'react';
import ContainerFormulario from '@/Components/Container/Formulario/style';
import Titulo from '@/Components/Container/Titulo/style';

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
      {/* {session?.user?.name ? (
        <button onClick={() => signOut()}>Deslogar</button>
      ) : (
        <button onClick={() => signIn()}>Logar</button>
      )} */}
    </ContainerFormulario>
  );
}

export default Pagina;
