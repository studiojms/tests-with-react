import { render, screen } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  beforeEach(() => {
    render(<App />);
  });

  describe('when the app is rendered, it ', () => {
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
});
