import React from 'react';
import styled from 'styled-components';

import Toc from './Toc';
import PostMarkdown from './PostMarkdown';

interface BodyProps {
  body: string;
}

const Body = ({ body }: BodyProps) => {
  return (
    <BodyWrapper>
      <PostMarkdown body={body} />
      <Toc />
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  margin-bottom: 20rem;
  @media screen and (min-width: ${({ theme }) => theme.responsive.lg}) {
    display: flex;
  }
`;

export default Body;
