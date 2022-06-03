import { Episode } from '../Episode';
import { render } from '@testing-library/react';
import { testEpisode } from 'lib/const';

test('renders an episode card', () => {
  const component = render(<Episode {...testEpisode} />);
  expect(component).toMatchSnapshot();
});
