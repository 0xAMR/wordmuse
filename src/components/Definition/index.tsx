// React
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Styling
import styled from 'styled-components';

// Ant Design
import { Typography, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
const { Title } = Typography;

const StyledDefinition = styled.div`
  width: 100%;
  max-width: 750px;
  padding: 2em 1em;
  margin: 0 auto;

  & .def__title {
    margin: 1.5em 0 0.25em 0;
  }

  & .def__ipa {
    font-weight: 600;
    color: #777;
  }

  & .def__word {
    h3 {
      font-weight: 600;
      margin: 0 0 0.25em 0;
      font-size: 1.2em;
    }

    p {
      font-size: 1.1em;
      color: #333;
    }
  }

  & hr {
    border: none;
    border-bottom: 1px solid #ddd;
    margin: 1em 0;
  }
`;

export default function Definition() {
  const [definition, setDefinition] = useState<any[]>([]);
  const params = useParams();
  const navigate = useNavigate();

  // fetch definition on mount
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${params.word}`
      );
      const _data = await response.json();

      setDefinition(_data);

      return () => setDefinition([]);
    })();
  }, [params]);

  return (
    <StyledDefinition>
      {definition ? (
        <>
          <Button
            onClick={() => navigate(`/search/${params.word}`)}
            type="primary"
            icon={<ArrowLeftOutlined />}
            size="large"
          >
            Back
          </Button>{' '}
          <Title className="def__title" level={3}>
            {definition[0]?.word}
          </Title>
          <p className="def__ipa">{definition[0]?.phonetic}</p>
          <hr />
          {definition[0]?.meanings.map((item: any) => (
            <div key={item?.partOfSpeech} className="def__word">
              <h3>{item?.partOfSpeech}</h3>
              <p>{item.definitions[0].definition}</p>
              <hr />
            </div>
          ))}
        </>
      ) : (
        <p>Sorry, we don't have a definition for "{params.word}" yet.</p>
      )}
    </StyledDefinition>
  );
}
