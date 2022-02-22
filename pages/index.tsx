// React
import { useState } from 'react';

// Next
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

// Styling
import styled from 'styled-components';

// Ant Design
import { Input, Layout, Typography, Select } from 'antd';
const { Search } = Input;
const { Content } = Layout;
const { Title } = Typography;
const { Option } = Select;

const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex: 1;

  & .main__layout {
    background-color: rgba(252, 252, 252);
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

const Home: NextPage = () => {
  const [wordInput, setWordInput] = useState('');
  const [wordType, setWordType] = useState('rel_rhy');

  const router = useRouter();

  return (
    <StyledApp>
      <Layout className="layout main__layout">
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
            onSearch={() =>
              router.push({
                pathname: `/search/${wordInput}`,
                query: { wordType },
              })
            }
            enterButton
          />
        </Content>
      </Layout>
    </StyledApp>
  );
};

export default Home;
