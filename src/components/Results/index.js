// Styling
// import styled from 'styled-components';

// Ant Design
import { Divider, Layout, Typography } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

export default function Results() {
  return (
    <Content>
      <Title className="main__title">Result</Title>
      <Title className="main__subtitle" level={5}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis,
        deserunt.
      </Title>
      <Divider />
    </Content>
  );
}
