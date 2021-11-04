// Styling
import styled from 'styled-components';

// Components
import Result from '../Result';

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
    padding: 2em 0;
    font-size: 1.75em;
  }
`;

type ResultsListProps = {
  data: object;
  wordInput: string;
  backHome: () => void;
};

export default function ResultsList({
  data,
  wordInput,
  backHome,
}: ResultsListProps): JSX.Element {
  return (
    <StyledList>
      <Button
        onClick={backHome}
        type="primary"
        icon={<ArrowLeftOutlined />}
        size="large"
      >
        Return Home
      </Button>
      <Title className="list__title" level={3}>
        Search results pertaining to '{wordInput}'
      </Title>
      {Object.values(data).map((result) => (
        <Result title={result.word} />
      ))}
    </StyledList>
  );
}
