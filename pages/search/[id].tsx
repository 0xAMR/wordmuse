// Next
import { useRouter } from 'next/router';

// React
import { useEffect, useState } from 'react';

// Styling
import styled from 'styled-components';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

// Components
import Result from '../../components/result';
import { Rings } from 'react-loader-spinner';

// Ant Design
import { Typography, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
const { Title } = Typography;

const StyledList = styled.div`
  width: 100%;
  height: 100%;
  max-width: 750px;
  padding: 2em 1em;
  margin: 0 auto;

  & .list__loader {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .list__title {
    padding: 2em 0 0.25em 0;
    font-size: 1.75em;
  }

  & .list__container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

// check if object is empty
const isEmpty = (obj: any) => {
  for (const key in obj) return false;

  return true;
};

type ResultsListProps = {
  backHome: () => void;
};

export default function ResultsList({
  backHome,
}: ResultsListProps): JSX.Element {
  const [searchResults, setSearchResults] = useState({});
  const [loaderOn, setLoaderOn] = useState(true);

  const router = useRouter();
  const { id, wordType } = router.query;

  const searchCriteria: Record<string, string> = {
    rel_rhy: 'rhyme with',
    sl: 'sound like',
    sp: 'are spelled like',
    ml: 'are related to',
    rel_ant: 'are antonyms of',
  };

  useEffect(() => {
    if (!wordType || !id) return;

    const _word = id;
    /**
     * take word, get data from api
     *
     * @param {string} word input string
     * @returns words that match the input string
     */
    async function getData(word: string | string[] | undefined) {
      const response = await fetch(
        `https://api.datamuse.com/words?${wordType}=${word}`
      );
      const data = await response.json();

      setLoaderOn(false);

      return data;
    }

    getData(_word).then((data) => {
      setSearchResults(data);
    });
  }, [id, wordType]);

  return (
    <StyledList>
      <Button
        onClick={() => router.replace('/')}
        type="primary"
        icon={<ArrowLeftOutlined />}
        size="large"
      >
        Back
      </Button>

      {loaderOn ? (
        <div className="list__loader">
          <Rings color="#1890ff" height={250} width={250} />
        </div>
      ) : (
        <Title className="list__title" level={3}>
          {isEmpty(searchResults)
            ? 'Sorry, we could not find any results for your search. Please try          searching for a different word.'
            : `Search results pertaining to words
          that ${wordType} ${id}`}
        </Title>
      )}
      <div className="list__container">
        {Object.values(searchResults).map((result: any) => (
          <Result
            key={result.word}
            onClick={() => router.push(`/define/${result.word}`)}
            title={result.word}
          />
        ))}
      </div>
    </StyledList>
  );
}
