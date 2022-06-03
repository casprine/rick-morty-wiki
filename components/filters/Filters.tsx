import { FunctionComponent } from 'react';
import Select from 'react-select';

import { styled } from '@/stitches';

const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

type filterOption = {
  label: string;
  values: string[];
};

const filterOptions: filterOption[] = [
  {
    label: 'status',
    values: ['alive', 'dead', 'unknown'],
  },

  {
    label: 'species',
    values: [
      'alien',
      'human',
      'poopybutthole',
      'humanoid',
      'mythological',
      'unknown',
      'animal',
      'disease',
      'robot',
      'cronenberg',
      'planet',
    ],
  },

  {
    label: 'gender',
    values: ['female', 'male', 'genderless', 'unknown'],
  },
];

interface FiltersProps {
  // updatePageNumber?: (pageNumber: number) => void;
  onClear: () => void;
  onFilterChange: (label: string, filter: string) => void;
}

interface FilterProps {
  label: string;
  onFilterClick: (label: string, filter: string) => void;
  values: string[];
}

const Filter: FunctionComponent<FilterProps> = ({ onFilterClick, label, values }) => {
  return (
    <FilterContainer>
      <p className="label">{label}</p>
      <Select
        onChange={({ value }: { value: string }) => onFilterClick(label, value)}
        options={values.map((v: string) => {
          return {
            value: v,
            label: capitalize(v),
          };
        })}
      />
    </FilterContainer>
  );
};

export const Filters: FunctionComponent<FiltersProps> = ({ onClear, onFilterChange }) => {
  return (
    <Container>
      <div className="header">
        <h4>Filters</h4>
        <button onClick={onClear}>Clear All</button>
      </div>

      {filterOptions.map((filter: filterOption, index: number) => {
        return <Filter {...filter} key={index} onFilterClick={onFilterChange} />;
      })}
    </Container>
  );
};

const Container = styled('div', {
  '.header': {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',

    button: {
      border: 0,
      backgroundColor: 'transparent',
      color: '$blue',
      cursor: 'pointer',
      fontSize: 16,
    },
  },
});

const FilterContainer = styled('div', {
  marginTop: 20,

  '.label': {
    textTransform: 'uppercase',
    margin: 5,
    fontSize: 16,
    fontWeight: 500,
  },
});
