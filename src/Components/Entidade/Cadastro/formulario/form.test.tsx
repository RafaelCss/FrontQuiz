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
import Formulario from '../index';
import ContainerLista from '../../../Container/Lista/style';

//Arquivo necessita ser invocado para funcionamento das funções do Jest
import '../../../../Testes/matchMedia';

const queryById = queryByAttribute.bind(null, 'id');

describe('Testa o Componente Formulario:', () => {
  it('Verifica se o form   está sendo renderizado:', async () => {
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
    await waitFor(() => document.querySelector(`#form`));

    const form = document.querySelector(`#form`);

    expect(screen.getByText('Senha')).toBeInTheDocument();
    expect(form).not.toBeNull();
    expect(form).toBeInTheDocument();
  });

  it('Verifica se o botão em está sendo renderizado:', async () => {
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
    await waitFor(() => document.querySelector(`#btn-confirmar`));
    const btnConfirmar = document.querySelector(`#btn-confirmar`);
    const form = document.querySelector(`#form`);

    expect(btnConfirmar).toBeInTheDocument();
    expect(form).not.toBeNull();
    expect(form).toBeInTheDocument();
  });
});
