import { Character } from '@/types';

export const BASE_URL = `https://rickandmortyapi.com/api`;
export const BASE_CHARACTER_URL = `https://rickandmortyapi.com/api/character`;

export const testCharacter: Character = {
  name: 'Morty Smith',
  status: 'alive',
  species: 'Human',
  location: {
    name: 'Citadel of Ricks',
  },
  gender: 'Male',
  id: 2,
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
};
