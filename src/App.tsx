// Styling
import styled from 'styled-components';

// Ant Design
import { Input, Layout, Menu, Typography } from 'antd';
const { Search } = Input;
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fff;

  & .main__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & .main__logo {
      color: white;
      font-size: 1.5em;
      font-weight: 600;
    }
  }

  & .main__title {
    padding: 0;
    margin: 0;
  }

  & .main__subtitle {
    padding: 0;
    margin-top: 1em;
    margin-bottom: 1.5em;
  }

  & .main__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10rem;
  }

  & .layout {
    width: 100%;
  }
`;

function App() {
  return (
    <StyledApp>
      <Layout className="layout">
        <Header className="main__header">
          <div className="main__logo">Wordmuse</div>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Developer</Menu.Item>
            <Menu.Item>API</Menu.Item>
          </Menu>
        </Header>
        <Content className="main__content">
          <Title className="main__title">Wordmuse</Title>
          <Title className="main__subtitle" level={5}>
            World's favourite word query engine
          </Title>
          <Search
            style={{ width: 500 }}
            placeholder="Enter word"
            size="large"
            onSearch={() => {}}
            enterButton
          />
        </Content>
        <Footer style={{ textAlign: 'center' }}>© Wordmuse 2021</Footer>
      </Layout>
    </StyledApp>
  );
}

export default App;
