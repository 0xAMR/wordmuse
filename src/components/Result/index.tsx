// Styling
import styled from 'styled-components';

// Ant Design
import { Divider, Layout, Typography } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

const StyledResult = styled.div`
  & .result__content {
    margin: 1em 1.5em;
    padding: 0.25em;
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
        <Divider />
      </Content>
    </StyledResult>
  );
}
