import { FunctionComponent } from 'react';
import { styled } from '@/stitches';
import { Character } from '@/types';
import Image from 'next/image';

interface CharacterCardProps extends Character {}

export const CharacterCard: FunctionComponent<CharacterCardProps> = ({ location, image, name, status, species }) => {
  return (
    <Container>
      <div className="image-container">
        <Image src={image} alt={`${name}-image`} layout="fill" />
      </div>

      <div className="character-details">
        <div className="header">
          <div className="flex left">
            <h4 className="name">{name}</h4>
            <p className="species">{species}</p>
          </div>
          <Status status={status}>
            <p>{status}</p>
          </Status>
        </div>

        <p className="last-location">
          <span>Last seen at</span> <span className="location">{location.name}</span>
        </p>
      </div>
    </Container>
  );
};

const Container = styled('div', {
  padding: 10,
  border: '1px solid $borderColor',
  borderRadius: 4,
  cursor: 'pointer',

  '.image-container': {
    width: '100%',
    position: 'relative',
    height: '304px',
    borderRadius: 3,
    overflow: 'hidden',
  },

  '.character-details': {
    paddingTop: 10,

    '.header': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    },

    '.left': {
      flexDirection: 'column',
    },

    '.species': {
      fontSize: 15,
      color: '$gray600',
    },

    '.last-location': {
      margin: '10px 0',

      span: {
        fontSize: 16,
      },

      '.location': {
        color: '$black',
        fontWeight: 600,
      },
    },
  },
});

const Status = styled('div', {
  padding: '2px 10px',
  borderRadius: 8,

  variants: {
    status: {
      alive: {
        backgroundColor: '$greenLight',
        p: {
          color: '$green',
        },
      },

      dead: {
        backgroundColor: '$redLight',
        p: {
          color: '$red',
        },
      },

      unknown: {
        backgroundColor: '$grayLight',
        p: {
          color: '$gray',
        },
      },
    },
  },

  p: {
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'uppercase',
  },
});
