// Styling
import styled from 'styled-components';

// Components
import Result from '../Result';

// Ant Design
import { Typography } from 'antd';
const { Title } = Typography;

const StyledList = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;

  & .list__title {
    padding: 2em 0;
    font-size: 1.75em;
  }
`;

type ResultsListProps = {
  data: object;
};

export default function ResultsList({ data }: ResultsListProps): JSX.Element {
  return (
    <StyledList>
      <Title className="list__title" level={3}>
        Search results pertaining to $param
      </Title>
      {Object.values(data).map((result) => (
        <Result title={result.word} />
      ))}
    </StyledList>
  );
}
