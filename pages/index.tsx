import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import router from 'next/router';

import { Filters, CharacterCard, Spinner } from '@/components/index';
import { styled } from '@/stitches';
import { Character, RequestInfo, FilterType } from '@/types';
import { getCharacters } from 'lib/requests';
import { isEmpty, transformCharacters } from 'lib/helpers';

interface HomePageProps {
  requestInfo: RequestInfo;
  characters: Array<Character>;
}

export async function getServerSideProps() {
  let requestInfo = {};
  let characters = {};

  try {
    const response = await getCharacters({
      status: '',
      gender: '',
      species: '',
      pageNumber: 1,
    });

    requestInfo = response.info;
    characters = transformCharacters(response.results);
  } catch (error) {}

  return {
    props: {
      requestInfo,
      characters,
    },
  };
}

interface Filters {
  status: string;
  gender: string;
  species: string;
}

const initialFilters = {
  status: '',
  gender: '',
  species: '',
};

const Home: NextPage<HomePageProps> = ({ characters: propInCharacters = [], requestInfo: propInRequestInfo = {} }) => {
  const [characters, setCharacters] = useState<Character[]>(propInCharacters);
  const [pageNumber, setPageNumber] = useState(1);
  const [requestInfo, setRequestInfo] = useState<RequestInfo>(propInRequestInfo as RequestInfo);
  const [makingRequest, setMakingRequest] = useState(false);

  const [filters, setFilters] = useState<Filters>(initialFilters);

  if (isEmpty(propInCharacters)) {
    return <NoCharacters />;
  }

  /**
   * @param args Filters
   * @returns fetch characters based on provided filters
   */
  async function getfilteredCharacters(args: Filters) {
    setMakingRequest(true);
    const { results } = await getCharacters(args);

    setMakingRequest(false);

    if (results) {
      setCharacters(transformCharacters(results));
      return;
    }

    setCharacters([]);
  }

  async function loadPaginatedData(count: number) {
    const currentPageIndex = pageNumber + count;
    setMakingRequest(true);
    setPageNumber(currentPageIndex);

    const { info, results } = await getCharacters({
      ...filters,
      pageNumber: currentPageIndex,
    });

    setRequestInfo(info);
    setMakingRequest(false);

    if (results) {
      setCharacters(transformCharacters(results));
      return;
    }

    setCharacters([]);
  }

  function onFilterChange(type: FilterType, value: string) {
    const newFilters = {
      ...filters,
      [type]: value,
    };
    setFilters(newFilters);

    getfilteredCharacters(newFilters);
  }

  function onFilterClear() {
    setFilters(initialFilters);
    setCharacters(propInCharacters);
  }

  function onCharacterClick(id: number) {
    router.push(`/character/${id}`);
  }

  return (
    <>
      <Head>
        <title>Rick and Morty</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        {makingRequest && (
          <div className="modal">
            <div className="content">
              <Spinner />
            </div>
          </div>
        )}

        <h1 className="page-header">All Characters</h1>

        <div className="filters">
          <Filters filterValues={filters} onClear={onFilterClear} onFilterChange={onFilterChange} />
        </div>
        <div className="grid">
          <div className="content">
            {isEmpty(characters) ? (
              <EmptyFilters />
            ) : (
              <>
                {characters.map((character: Character) => (
                  <CharacterCard {...character} key={character.id} onClick={() => onCharacterClick(character.id)} />
                ))}
              </>
            )}
          </div>
        </div>

        <div className="pagination flex">
          {requestInfo?.prev && <button onClick={() => loadPaginatedData(-1)}>Prev</button>}

          {requestInfo?.next && <button onClick={() => loadPaginatedData(1)}> Next </button>}
        </div>
      </MainLayout>
    </>
  );
};

const NoCharacters = () => {
  return (
    <NoCharactersContainer className="flex">
      <p>Hey, We {"couldn't"} find any rick and morty characters</p>
      <button onClick={() => router.reload()}>Reload page</button>
    </NoCharactersContainer>
  );
};

const EmptyFilters = () => {
  return (
    <div className="empty-filter-results flex">
      <p>Sorry, we are unable to find any characters for this filter</p>
    </div>
  );
};

const NoCharactersContainer = styled('div', {
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  flexDirection: 'column',

  button: {
    border: '0px',
    backgroundColor: '$blue',
    marginTop: 10,
    height: 46,
    padding: '0 25px',
    color: '$loContrast',
    borderRadius: 4,
    cursor: 'pointer',
  },
});

const MainLayout = styled('section', {
  maxWidth: '1280px',
  margin: '0 auto',
  position: 'relative',

  '.page-header': {
    textAlign: 'center',
  },

  '.empty-filter-results': {
    width: '100%',
    gridColumn: 'span 8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  '.grid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gap: 10,

    '.content': {
      gridColumn: 'span 12',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      justifyContent: 'space-between',
      gap: 20,

      '@md': {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },

      '@lg': {
        gridTemplateColumns: 'repeat(4, 1fr)',
      },
    },
  },
  '.pagination': {
    justifyContent: 'center',
    margin: 20,
    gap: 10,

    button: {
      backgroundColor: '$green',
      color: '$loContrast',
      border: 0,
      fontSize: 15,
      padding: '4px 15px',
      borderRadius: 4,
      cursor: 'pointer',
    },
  },
});

export default Home;
