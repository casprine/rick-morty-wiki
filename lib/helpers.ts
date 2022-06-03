import { Character, Episode, StatusType } from '@/types';

export const capitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

export const isEmpty = (value: Array<any>) => value.length === 0;

export const transformCharacters = (data: Character[]) => {
  return data.map(({ name, status, species, location, gender, id, image }: Character): Character => {
    return {
      name,
      status: status.toLocaleLowerCase() as StatusType,
      species,
      location,
      gender,
      id,
      image,
    };
  });
};

export const transformCharacterEpisodes = (data: any[]): Array<Episode> => {
  return data.map(
    ({ id, name, episode, air_date }: { id: number; name: string; episode: string; air_date: string }) => {
      return {
        name,
        episode,
        airDate: air_date,
        id,
      };
    },
  );
};
