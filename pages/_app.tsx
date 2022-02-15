// Styling
import 'antd/dist/antd.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import styled from 'styled-components';

// Ant Design
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const StyledHeader = styled.main`
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
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledHeader>
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
    </StyledHeader>
  );
}

export default MyApp;
