import TabelaCampeonato from '.';
import { render, screen } from '@testing-library/react';

describe('Criando teste da tabela do campeonato', () => {
  test('Verifica se a tabela foi renderizada', async () => {
    render(<TabelaCampeonato />);

    expect(screen.getByText('Time')).toBeInTheDocument;
    expect(screen.getByText('Time')).toBeInTheDocument;
    expect(screen.getByText('Pontos')).toBeInTheDocument;
    expect(screen.getByText('Vitorias')).toBeInTheDocument;
  });
});
