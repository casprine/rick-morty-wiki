import { Character, Episode } from '@/types';

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

export const testEpisode: Episode = {
  name: 'The Ricklantis Mixup',
  episode: 'S03E07',
  airDate: 'September 10, 2017',
  id: 28,
};
