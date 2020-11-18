import { render, screen } from '@testing-library/react';

import App, { calcularNovoSaldo } from './App';

describe('<App />', () => {
  describe('when the app is rendered, it ', () => {
    beforeEach(() => {
      render(<App />);
    });

    it('should show the bank name', () => {
      expect(screen.getByText('ByteBank')).toBeInTheDocument();
    });

    it('should show balance', () => {
      expect(screen.getByText('Saldo:')).toBeInTheDocument();
    });

    it('should show "Do Operation" button', () => {
      expect(screen.getByText('Realizar operação')).toBeInTheDocument();
    });
  });

  describe('when I confirm an operation', () => {
    it('should decrease the balance if the operation is a withdraw', () => {
      const values = {
        transacao: 'saque',
        valor: 50,
      };
      const newBalance = calcularNovoSaldo(values, 150);
      expect(newBalance).toBe(100);
    });
  });
});
