// Styling
import 'antd/dist/antd.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import styled from 'styled-components';

// Ant Design
import { Layout, Menu } from 'antd';
const { Header, Footer } = Layout;

const StyledMain = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  & .main__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 0 0 3em;

    & .main__logo {
      color: white;
      font-size: 1.75em;
      font-weight: 600;
    }
  }

  & .main__footer {
    background-color: transparent;
    color: #888;
    font-size: 0.95em;
    text-align: center;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledMain>
      <Header className="main__header">
        <div className="main__logo">Wordmuse</div>
        <Menu
          className="main__menu"
          style={{ width: '300px' }}
          theme="dark"
          mode="horizontal"
        ></Menu>
      </Header>
      <Component {...pageProps} />
      <Footer className="main__footer">© Wordmuse 2022</Footer>
    </StyledMain>
  );
}

export default MyApp;
