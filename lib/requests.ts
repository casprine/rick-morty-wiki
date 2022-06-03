import { Character, CharacterResponse, Episode, GetCharacterParams } from '@/types';
import { BASE_URL, BASE_CHARACTER_URL } from './const';

// utils
const fetcher = (url: string) => fetch(url).then((r) => r.json());
const getEpisodeIds = (urls: string[] = []): number[] => {
  const ids = urls.map((url) => Number(url.split('/episode/')[1]));
  return ids;
};

/**
 * @param {string} id
 * @returns Character
 */
export const getSingleCharacter = async (id: string): Promise<Character> => {
  return await fetcher(`${BASE_URL}/character/${id}`);
};

/**
 * @param {GetCharacterParams} params
 * @returns Array of CharacterResponse
 */
export const getCharacters = async ({
  status = '',
  gender = '',
  pageNumber = 1,
  species = '',
}: GetCharacterParams): Promise<CharacterResponse> => {
  console.log({
    status,
    gender,
    pageNumber,
    species,
  });
  const url = `${BASE_CHARACTER_URL}/?page=${pageNumber}&status=${status}&gender=${gender}&species=${species}`;
  return await fetcher(url);
};

/**
 * @param {Array<String>} episode
 * @returns Array of Episodes | Array<Episode>
 */

export const getEpisodes = async (episodes: Array<string>): Promise<Array<Episode>> => {
  const ids = getEpisodeIds(episodes);
  const url = `${BASE_URL}/episode/${ids}`;
  const response = await fetcher(url);

  if (!Array.isArray(response)) return [response];
  return [...response];
};
