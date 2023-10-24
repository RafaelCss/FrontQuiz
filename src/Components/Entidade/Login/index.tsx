import { useSession } from 'next-auth/react';
import Formulario from './formulario';
import ContainerFormulario from '@/Components/Container/Formulario/style';

function Pagina() {
  const { data: session } = useSession();
  console.log(session?.user?.accessToken);
  return (
    <ContainerFormulario>
      <Formulario />
    </ContainerFormulario>
  );
}

export default Pagina;
