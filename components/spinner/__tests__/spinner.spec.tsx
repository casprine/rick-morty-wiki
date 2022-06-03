import { Spinner } from '../Spinner';
import { render } from '@testing-library/react';

test('', () => {
  const component = render(<Spinner />);
  expect(component).toMatchSnapshot();
});
