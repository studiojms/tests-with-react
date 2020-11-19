import { fireEvent, render, screen } from '@testing-library/react';

import Conta from './Conta';

describe('<Conta />', () => {
  it('should show the account balance with money format', () => {
    render(<Conta saldo={1000} />);

    const balance = screen.getByTestId('saldo-conta');
    expect(balance.textContent).toBe('R$ 1000');
  });

  it('should call the function to execute the operation when the button is clicked', () => {
    const doTransactionFn = jest.fn();

    render(<Conta saldo={1000} realizarTransacao={doTransactionFn} />);

    fireEvent.click(screen.getByText('Realizar operação'))

    expect(doTransactionFn).toHaveBeenCalled();
  });
});
