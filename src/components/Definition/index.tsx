// React
import { useEffect, useState } from 'react';

// Styling
import styled from 'styled-components';

// Ant Design
import { Typography } from 'antd';
const { Title } = Typography;

const StyledDefinition = styled.div``;

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
      {definition.length > 0 && (
        <>
          <Title className="list__title" level={3}>
            {definition[0]?.phonetic}
          </Title>
          <p>{definition[0]?.meanings[0]?.definitions[0]?.definition}</p>
        </>
      )}
    </StyledDefinition>
  );
}
