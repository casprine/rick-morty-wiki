export interface Character {
  id: number;
  name: string;
  species: string;
  image: string;
  status: 'alive' | 'dead' | 'unknown';
  location: Location;
  gender: string;
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

export interface GetCharacterParams {
  status?: string;
  species?: string;
  pageNumber?: number;
  gender?: string;
}

export type FilterType = 'status' | 'gender' | 'species';
