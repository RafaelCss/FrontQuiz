import ContainerFormulario from '../../Container/Formulario/style';
import Titulo from '../../Container/Titulo/style';
import Formulario from './formulario';

function Pagina() {
  return (
    <ContainerFormulario>
      <Titulo>
        <h2>Realize seu cadastro</h2>
      </Titulo>
      <Formulario />
    </ContainerFormulario>
  );
}

export default Pagina;
