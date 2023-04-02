import ContentMod from '../../Container/Central/style';
import ContainerLista from '../../Container/ListaPerguntas/style';
import Formulario from './formulario';

function Pagina() {
  return (
    <ContentMod>
      <ContainerLista>
        <Formulario />
      </ContainerLista>
    </ContentMod>
  );
}

export default Pagina;
