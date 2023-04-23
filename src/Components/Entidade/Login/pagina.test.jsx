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
import userEvent from '@testing-library/user-event';

//Arquivo necessita ser invocado para funcionamento das funções do Jest
import '../../../Testes/matchMedia';

const queryById = queryByAttribute.bind(null, 'id');

describe('Testa se a pagina está renderizada', () => {
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

  it('Verifica se há click no botão:', async () => {
    // arrange
    // act

    act(() => {
      render(<Pagina />);
    });

    // assert
    await waitFor(() => queryById(document, `btn-confirmar`));
    const btnConfirmar = queryById(document, `btn-confirmar`);
    const form = queryById(document, `form`);
    userEvent.click(btnConfirmar);
    expect(btnConfirmar).toBeInTheDocument();
    expect(form).not.toBeNull();
    expect(form).toBeInTheDocument();
  });
});
