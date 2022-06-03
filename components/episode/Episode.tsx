import { styled } from '@/stitches';
import { Episode as EpisodeType } from '@/types';
import { FunctionComponent } from 'react';

export const Episode: FunctionComponent<EpisodeType> = ({ name, airDate, episode }) => {
  return (
    <Container>
      <p className="name">{name}</p>
      <p className="aired-date">Aired on {airDate}</p>
      <p className="episode-timeline">{episode}</p>
    </Container>
  );
};

const Container = styled('div', {
  border: '1px solid $grayLight',
  padding: 20,
  marginBottom: -1,
  marginLeft: -1,

  p: {
    fontSize: 15,
  },
});
