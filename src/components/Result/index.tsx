// Ant Design
import { Divider, Layout, Typography } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

type ResultsProps = {
  title: string;
  description: string;
};

export default function Result({ title, description }: ResultsProps) {
  return (
    <Content>
      <Title className="main__title">{title}</Title>
      <Title className="main__subtitle" level={5}>
        {description}
      </Title>
      <Divider />
    </Content>
  );
}
