import '@testing-library/jest-dom';
import {
  act,
  cleanup,
  fireEvent,
  getByText,
  queryAllByAltText,
  queryByAttribute,
  queryByText,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import Pagina from '.';
import userEvent from '@testing-library/user-event';

//Arquivo necessita ser invocado para funcionamento das funções do Jest
import '../../../Testes/matchMedia';

describe('Testa se a pagina está renderizada', () => {
  test('Verifica se o botão em   está sendo renderizado:', async () => {
    // arrange
    // act

    const { container } = render(<Pagina />);
    act(() => {});

    // assert
    await waitFor(() => container.querySelector(`#btn-confirmar`));
    const btnConfirmar = container.querySelector(`#btn-confirmar`);
    const form = container.querySelector(`#form`);

    expect(btnConfirmar).toBeInTheDocument();
    expect(form).not.toBeNull();
    expect(form).toBeInTheDocument();
  });

  test('Verifica se há click no botão:', async () => {
    // arrange
    // act
    const { container } = render(<Pagina />);
    act(() => {
      render(<Pagina />);
    });

    // assert
    await waitFor(() => container.querySelector(`#btn-confirmar`));
    const btnConfirmar = container.querySelector(`#btn-confirmar`);
    const form = container.querySelector(`#form`);
    userEvent.click(btnConfirmar as Element);
    expect(btnConfirmar).toBeInTheDocument();
    expect(form).not.toBeNull();
    expect(form).toBeInTheDocument();
  });
});
