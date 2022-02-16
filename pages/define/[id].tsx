// Next
import { useRouter } from 'next/router';

// React
import { useEffect, useState } from 'react';

// Styling
import styled from 'styled-components';

// Components
import { Rings } from 'react-loader-spinner';

// Ant Design
import { Typography, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
const { Title } = Typography;

const StyledDefinition = styled.div`
  width: 100%;
  max-width: 750px;
  padding: 2em 1em;
  margin: 0 auto;

  & .def__loader {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

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

export default function Define() {
  const [definition, setDefinition] = useState<any[]>([]);
  const [loaderOn, setLoaderOn] = useState(true);

  const router = useRouter();
  const { id } = router.query;

  // fetch definition on mount
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${id}`
      );
      const _data = await response.json();

      setDefinition(_data);
      setLoaderOn(false);

      return () => setDefinition([]);
    })();
  }, [id]);

  return (
    <StyledDefinition>
      <Button
        onClick={() => router.push(`/search/${id}?wordType=rel_rhy`)}
        type="primary"
        icon={<ArrowLeftOutlined />}
        size="large"
      >
        Back
      </Button>

      {loaderOn ? (
        <div className="def__loader">
          <Rings color="#1890ff" height={250} width={250} />
        </div>
      ) : definition ? (
        <>
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
        <p>Sorry, we do not have a definition for {id} yet.</p>
      )}
    </StyledDefinition>
  );
}
