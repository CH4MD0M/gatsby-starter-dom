import React from 'react';
import styled from 'styled-components';

import Layout from '../layout';
import Seo from '../components/Seo';

const NotFoundPage = () => (
  <Layout>
    <Seo title="Not found" />
    <Wrapper>
      <h1>Not Found</h1>
      <span>요청하신 페이지를 찾을 수 없습니다.</span>
    </Wrapper>
  </Layout>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 6rem;
    margin-bottom: 3rem;
  }
  span {
    font-size: 2rem;
  }
`;
export default NotFoundPage;
