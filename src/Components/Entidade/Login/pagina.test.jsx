import '@testing-library/jest-dom';
import {
  act,
  cleanup,
  fireEvent,
  getByText,
  queryAllByAltText,
  queryByAttribute,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import Pagina from '.';

//Arquivo necessita ser invocado para funcionamento das funções do Jest
import '../../../Testes/matchMedia';

const queryById = queryByAttribute.bind(null, 'id');

describe('Testa se a pagina está renderizada', () => {
  it('Verifica se o form   está sendo renderizado:', async () => {
    // arrange
    // act

    act(() => {
      render(<Pagina />);
    });

    // assert
    await waitFor(() => queryById(document, `form`));

    const titulo = getByText(document, 'Realize seu cadastro');

    expect(screen.getByText('Realize seu cadastro')).toBeInTheDocument();
    expect(titulo).not.toBeNull();
    expect(titulo).toBeInTheDocument();
  });

  it('Verifica se o botão em   está sendo renderizado:', async () => {
    // arrange
    // act

    act(() => {
      render(<Pagina />);
    });

    // assert
    await waitFor(() => queryById(document, `btn-confirmar`));
    const btnConfirmar = queryById(document, `btn-confirmar`);
    const form = queryById(document, `form`);

    expect(btnConfirmar).toBeInTheDocument();
    expect(form).not.toBeNull();
    expect(form).toBeInTheDocument();
  });
});
