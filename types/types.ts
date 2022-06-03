export interface Character {
  id: number;
  name: string;
  species: string;
  image: string;
  status: 'alive' | 'dead' | 'unknown';
  location: Location;
  gender: string;
  episode: string[];
}

export interface CharacterResponse {
  info: RequestInfo;
  results: Character[];
}

export interface RequestInfo {
  next: string;
  prev: string | null;
}

export interface Location {
  name: string;
}

export interface Episode {
  id: number;
  name: string;
  airDate: string;
  episode: string;
}

export interface GetCharacterParams {
  status?: string;
  species?: string;
  pageNumber?: number;
  gender?: string;
}

export type FilterType = 'status' | 'gender' | 'species';
