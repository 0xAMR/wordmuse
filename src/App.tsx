// React
import { useState } from 'react';

// Styling
import styled from 'styled-components';

// Components
import ResultsList from './components/ResultsList';

// Ant Design
import { Input, Layout, Menu, Typography, Select } from 'antd';
const { Search } = Input;
const { Header, Content, Footer } = Layout;
const { Title } = Typography;
const { Option } = Select;

const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;

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

  & .main__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 7.5rem;

    & .main__title {
      color: #333;
      padding: 0;
      margin: 0 0 0.25em 0;
    }

    & .main__subtitle {
      color: #666;
      text-transform: capitalize;
      font-weight: 500;
      padding: 0;
      margin-top: 1em;
      margin-bottom: 1.65em;
      font-size: 1.1em;
    }

    & .main__select {
      margin: 0 0.5em;
      color: #333;
    }
  }

  & .layout {
    width: 100%;
  }
`;

export default function App() {
  const [resultsActive, setResultsActive] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [wordInput, setWordInput] = useState('');
  const [wordType, setWordType] = useState('rel_rhy');

  /**
   * take word, get data from api
   *
   * @param {string} word input string
   * @returns words that match the input string
   */
  async function getData(word: string) {
    const response = await fetch(
      `https://api.datamuse.com/words?${wordType}=${word}`
    );
    const data = await response.json();

    return data;
  }

  /**
   * handle search by getting and displaying data
   */
  const handleSearch = () => {
    getData(wordInput).then((data) => {
      setSearchResults(data);
      setResultsActive(true);
    });
  };

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
        {!resultsActive ? (
          <Content className="main__content">
            <Title className="main__title">Wordmuse</Title>
            <Title className="main__subtitle" level={5}>
              Find words that{' '}
              <Select
                className="main__select"
                defaultValue={wordType}
                style={{ width: 175 }}
                onChange={(e) => setWordType(e)}
              >
                <Option value="rel_rhy">Rhyme with</Option>
                <Option value="sl">Sound Like</Option>
                <Option value="sp">Are Spelled Like</Option>
                <Option value="ml">Are Related to</Option>
                <Option value="rel_ant">Are Antonyms of</Option>
              </Select>
              your input
            </Title>
            <Search
              style={{ maxWidth: 500 }}
              placeholder="Enter word"
              size="large"
              onChange={(e) => setWordInput(e.target.value)}
              onSearch={handleSearch}
              enterButton
            />
          </Content>
        ) : (
          <ResultsList
            data={searchResults}
            wordInput={wordInput}
            wordType={wordType}
            backHome={() => setResultsActive(false)}
          />
        )}
        <Footer className="main__footer">© Wordmuse 2021</Footer>
      </Layout>
    </StyledApp>
  );
}
