import '@testing-library/jest-dom';
import {
  act,
  cleanup,
  fireEvent,
  getByText,
  queryByAttribute,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import Formulario from './formulario/index';
import ContainerLista from '../../Container/Lista/style';
//Arquivo necessita ser invocado para funcionamento das funções do Jest
import '../../../Testes/matchMedia';

const queryById = queryByAttribute.bind(null, 'id');

describe('Testa o Componente Formulario:', () => {
  it('Verifica se o form em modo visualização  está sendo renderizado:', async () => {
    // arrange
    // act

    act(() => {
      render(
        <ContainerLista>
          <Formulario key={'et'} />
        </ContainerLista>
      );
    });

    // assert
    await waitFor(() => queryById(document, `form`));

    const form = queryById(document, `form`);

    expect(screen.getByText('Senha')).toBeInTheDocument();
    expect(form).not.toBeNull();
    expect(form).toBeInTheDocument();
  });
});
