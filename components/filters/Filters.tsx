import { FunctionComponent } from 'react';
import Select, { StylesConfig } from 'react-select';

import { styled } from '@/stitches';
import { FilterType } from '@/types';
import { capitalize } from 'lib/helpers';

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
  onFilterChange: (type: FilterType, value: string) => void;
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
        styles={selectStyles}
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
    <Container className="flex">
      <div className="actions flex">
        {filterOptions.map((filter: filterOption, index: number) => {
          return <Filter {...filter} key={index} onFilterClick={onFilterChange} />;
        })}

        <button onClick={onClear}>Clear All</button>
      </div>
    </Container>
  );
};

const Container = styled('div', {
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 30,

  '*': {
    outline: '1px dotted red',
  },

  '.header': {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },

  '.actions': {
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    border: 0,
    backgroundColor: 'transparent',
    color: '$blue',
    cursor: 'pointer',
    fontSize: 16,
  },
});

const FilterContainer = styled('div', {
  marginTop: 20,
  marginLeft: '5px',
  marginRight: '5px',

  '.label': {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 500,
    marginBottom: 5,
  },
});

const selectStyles: StylesConfig<{}> = {
  container: (styles) => ({
    ...styles,
    width: 200,
  }),

  input: (styles) => ({
    ...styles,
    fontSize: 15,
    height: 25,
  }),

  placeholder: (styles) => ({
    ...styles,
    fontSize: 15,
  }),
  singleValue: (styles) => ({
    ...styles,
    fontSize: 15,
  }),
  option: (styles) => ({
    ...styles,
    fontSize: 15,
  }),
};
