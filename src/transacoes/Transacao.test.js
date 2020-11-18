import { render } from '@testing-library/react';

import Transacao from './Transacao';

describe('<Transacao />', () => {
  it('should have always the same component snapshot', () => {
    const { container } = render(<Transacao data="01/11/2020" tipo="saque" valor="20.00" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
