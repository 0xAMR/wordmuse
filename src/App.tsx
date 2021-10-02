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

  & .main__layout {
    background-color: rgba(252, 252, 252);

    & .main__footer {
      background-color: transparent;
      color: #888;
      font-size: 0.95em;
      text-align: center;
    }
  }

  & .main__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & .main__logo {
      color: white;
      font-size: 1.75em;
      font-weight: 600;
    }
  }

  & .main__title {
    color: #333;
    padding: 0;
    margin: 0;
  }

  & .main__subtitle {
    color: #666;
    font-style: italic;
    text-transform: capitalize;
    font-weight: 500;
    padding: 0;
    margin-top: 1em;
    margin-bottom: 1.75em;
  }

  & .main__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 7.5rem;
  }

  & .layout {
    width: 100%;
  }
`;

function App() {
  return (
    <StyledApp>
      <Layout className="layout main__layout">
        <Header className="main__header">
          <div className="main__logo">Wordmuse</div>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item>Developer</Menu.Item>
            <Menu.Item>API</Menu.Item>
          </Menu>
        </Header>
        <Content className="main__content">
          <Title className="main__title">Wordmuse</Title>
          <Title className="main__subtitle" level={5}>
            world's favourite word query engine
          </Title>
          <Search
            style={{ width: 500 }}
            placeholder="Enter word"
            size="large"
            onSearch={() => {}}
            enterButton
          />
        </Content>
        <Footer className="main__footer">© Wordmuse 2021</Footer>
      </Layout>
    </StyledApp>
  );
}

export default App;
