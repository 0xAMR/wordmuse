// React
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Styling
import styled from 'styled-components';

// Components
import Result from '../Result';
import Definition from '../Definition';

// Ant Design
import { Typography, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
const { Title } = Typography;

const StyledList = styled.div`
  width: 100%;
  max-width: 750px;
  padding: 2em 1em;
  margin: 0 auto;

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
  data: object;
  wordInput: string;
  wordType: string;
  backHome: () => void;
};

export default function ResultsList({
  data,
  wordInput,
  wordType,
  backHome,
}: ResultsListProps): JSX.Element {
  const [activeDefinition, setActiveDefinition] = useState(false);
  const [definedWord, setDefinedWord] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  const searchCriteria: Record<string, string> = {
    rel_rhy: 'rhyme with',
    sl: 'sound like',
    sp: 'are spelled like',
    ml: 'are related to',
    rel_ant: 'are antonyms of',
  };

  return (
    <StyledList>
      <Button
        onClick={() => navigate('/')}
        type="primary"
        icon={<ArrowLeftOutlined />}
        size="large"
      >
        {activeDefinition ? 'Back' : 'Return Home'}
      </Button>

      {isEmpty(data) ? (
        <Title className="list__title" level={3}>
          Sorry, we could not find any results for your search. Please try
          searching for a different word. {params.word}
        </Title>
      ) : (
        !activeDefinition && (
          <Title className="list__title" level={3}>
            Search results pertaining to words that {searchCriteria[wordType]} '
            {wordInput}'
          </Title>
        )
      )}

      {activeDefinition ? (
        <p>placeholder</p>
      ) : (
        <div className="list__container">
          {Object.values(data).map((result) => (
            <Result
              key={result.word}
              onClick={() => navigate(`/definition/${result.word}`)}
              title={result.word}
            />
          ))}
        </div>
      )}
    </StyledList>
  );
}
