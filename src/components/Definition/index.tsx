// React
import { useEffect, useState } from 'react';

// Styling
import styled from 'styled-components';

// Ant Design
import { Typography } from 'antd';
const { Title } = Typography;

const StyledDefinition = styled.div`
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

type DefinitionProps = {
  definedWord: string;
};

export default function Definition({ definedWord }: DefinitionProps) {
  const [definition, setDefinition] = useState<any[]>([]);

  // fetch definition on mount
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${definedWord}`
      );
      const _data = await response.json();

      setDefinition(_data);
    })();
  }, [definedWord]);

  return (
    <StyledDefinition>
      {definition.length > 0 ? (
        <>
          <Title className="def__title" level={3}>
            {definition[0]?.word}
          </Title>
          <p className="def__ipa">{definition[0]?.phonetic}</p>
          <hr />
          {definition[0]?.meanings.map((item: any) => (
            <div className="def__word">
              <h3>{item?.partOfSpeech}</h3>
              <p>{item.definitions[0].definition}</p>
              <hr />
            </div>
          ))}
        </>
      ) : (
        <p>Sorry, we don't have a definition for "{definedWord}" yet.</p>
      )}
    </StyledDefinition>
  );
}
