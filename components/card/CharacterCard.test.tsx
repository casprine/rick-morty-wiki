import { CharacterCard } from './CharacterCard';
import { render } from '@testing-library/react';
import { testCharacter } from 'lib/const';

test('renders a character card', () => {
  const component = render(<CharacterCard {...testCharacter} />);

  expect(component).toMatchSnapshot();
});
