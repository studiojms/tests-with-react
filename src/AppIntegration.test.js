import { render, screen } from '@testing-library/react';
import api from './api';

import App from './App';

jest.mock('./api');

describe('<App />', () => {
  describe('API Requests', () => {
    it('should list the transactions received form the API', async () => {
      api.listaTransacoes.mockResolvedValue([
        {
          valor: '10',
          transacao: 'saque',
          data: '01/11/2020',
          id: 1,
        },
        {
          valor: '20',
          transacao: 'deposito',
          data: '15/11/2020',
          id: 2,
        },
      ]);

      render(<App />);

      expect(await screen.findByText('saque')).toBeInTheDocument();

      expect(screen.getByTestId('transacoes').children.length).toBe(2);
    });
  });
});
