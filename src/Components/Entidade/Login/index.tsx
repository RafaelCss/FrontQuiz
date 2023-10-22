import { useSession } from 'next-auth/react';
import Formulario from './formulario';
import ContainerFormulario from '@/Components/Container/Formulario/style';

function Pagina() {
  return (
    <ContainerFormulario>
      <Formulario />
    </ContainerFormulario>
  );
}

export default Pagina;
