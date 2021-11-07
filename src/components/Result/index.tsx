// Styling
import styled from 'styled-components';

// Ant Design
import { Layout, Typography } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

const StyledResult = styled.div`
  & .result__content {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1em 1.5em;
    padding: 0.25em;
    width: 175px;
    height: 60px;
    border: 1px solid #d9d9d9;
    border-radius: 2px;

    & .result__title {
      margin: 0 0 0.25em 0;
      font-weight: 500;
    }
  }
`;

type ResultsProps = {
  title: string;
};

export default function Result({ title }: ResultsProps) {
  return (
    <StyledResult>
      <Content className="result__content">
        <Title className="result__title" level={4}>
          {title}
        </Title>
      </Content>
    </StyledResult>
  );
}
