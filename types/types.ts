export interface Character {
  id: number;
  name: string;
  species: string;
  image: string;
  status: 'Alive' | 'Dead' | 'Unknown';
  origin: Location;
  location: Location;
  gender: string;
  episode: string[];
  url: string;
}

export interface CharacterResponse {
  info: RequestInfo;
  results: Character[];
}

export interface RequestInfo {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}

export interface Location {
  name: string;
  url: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: Character[];
  url: string;
  created: string;
}
