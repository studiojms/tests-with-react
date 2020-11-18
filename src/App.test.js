import { fireEvent, render, screen } from '@testing-library/react';

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

    it('should process the operation successfully', () => {
      render(<App />);

      const balance = screen.getByText('R$ 1000');
      const transaction = screen.getByLabelText('Saque');
      const value = screen.getByTestId('valor');
      const transactionButton = screen.getByText('Realizar operação');

      expect(balance.textContent).toBe('R$ 1000');

      fireEvent.click(transaction, {
        target: {
          value: 'saque',
        },
      });

      fireEvent.change(value, {
        target: {
          value: 10,
        },
      });

      fireEvent.click(transactionButton);

      expect(balance.textContent).toBe('R$ 990');
    });
  });
});
