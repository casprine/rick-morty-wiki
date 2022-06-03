import { FunctionComponent } from 'react';
import Select, { StylesConfig } from 'react-select';

import { styled } from '@/stitches';
import { FilterType } from '@/types';
import { capitalize } from 'lib/helpers';

type filterOption = {
  label: FilterType;
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
  onClear: () => void;
  onFilterChange: (type: FilterType, value: string) => void;
  filterValues: Record<FilterType, string>;
}

interface FilterProps {
  label: FilterType;
  onFilterClick: (label: FilterType, filter: string) => void;
  values: string[];
  selectValue: string;
}

const Filter: FunctionComponent<FilterProps> = ({ selectValue, onFilterClick, label, values }) => {
  return (
    <FilterContainer>
      <p className="label">{label}</p>
      <Select
        styles={selectStyles}
        id="filter-select"
        instanceId="filter-select"
        value={
          selectValue
            ? {
                label: capitalize(selectValue),
                value: selectValue,
              }
            : null
        }
        onChange={(selectedOption: any) => {
          onFilterClick(label, selectedOption.value);
        }}
        placeholder={`Select a ${label}`}
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

export const Filters: FunctionComponent<FiltersProps> = ({ filterValues, onClear, onFilterChange }) => {
  return (
    <Container className="flex">
      {filterOptions.map((filter: filterOption, index: number) => {
        return (
          <Filter {...filter} selectValue={filterValues[filter.label]} key={index} onFilterClick={onFilterChange} />
        );
      })}
      <button onClick={onClear}>Clear All</button>
    </Container>
  );
};

const Container = styled('div', {
  alignItems: 'flex-end',
  marginBottom: 30,
  flexWrap: 'wrap',
  justifyContent: 'flex-start',

  '@sm': {
    justifyContent: 'center',
  },

  '.header': {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },

  button: {
    border: 0,
    backgroundColor: 'transparent',
    color: '$blue',
    cursor: 'pointer',
    fontSize: 16,
    marginBottom: 10,
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
