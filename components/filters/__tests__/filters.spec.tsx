import { Filters } from '../Filters';
import { render } from '@testing-library/react';
import { FilterType } from '@/types';

const initialFilters: Record<FilterType, string> = {
  status: '',
  gender: '',
  species: '',
};

test('renders a filter with empty state', () => {
  const component = render(<Filters onClear={jest.fn()} onFilterChange={jest.fn()} filterValues={initialFilters} />);
  expect(component).toMatchSnapshot();
});
