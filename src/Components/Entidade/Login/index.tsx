import Formulario from './formulario';
import { useEffect, useState } from 'react';
import ContainerFormulario from '@/Components/Container/Formulario/style';
import Titulo from '@/Components/Container/Titulo/style';
import { useSession, signIn, signOut } from 'next-auth/react';
const logar = 'Faça Login:';
const cadastro = 'Realize seu cadastro:';

function Pagina() {
  const [checked, setChecked] = useState<boolean>(false);
  const [labelForm, setLabelForm] = useState<string>();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (checked) {
      setLabelForm(cadastro);
    } else {
      setLabelForm(logar);
    }
  }, [checked]);

  return (
    <ContainerFormulario>
      Olá {session?.user?.name}
      <Titulo>
        <h2>{labelForm}</h2>
      </Titulo>
      <Formulario setChecked={setChecked} checked={checked} />
      {session?.user?.name ? (
        <button onClick={() => signOut()}>Deslogar</button>
      ) : (
        <button onClick={() => signIn()}>Logar</button>
      )}
    </ContainerFormulario>
  );
}

export default Pagina;
