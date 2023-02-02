import React from 'react';
import styled from 'styled-components';

import Toc from './Toc';
import PostMarkdown from './PostMarkdown';

const Body = ({ body }) => {
  return (
    <BodyWrapper>
      <PostMarkdown body={body} />
      <Toc />
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.responsive.lg}) {
    display: flex;
  }
`;

export default Body;
