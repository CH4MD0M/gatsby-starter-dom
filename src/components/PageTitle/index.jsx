import React from "react";
import styled from "styled-components";

const PageTitle = ({ children }) => {
  return (
    <TitleWrapper>
      <Title>{children}</Title>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  width: fit-content;
  padding: 0.8rem 1.2rem;
  margin-bottom: 2rem;
  border-radius: 6px;

  background: var(--pageTitleBgColor);
`;

const Title = styled.h2`
  color: var(--bgColor);
  font-size: 2.5rem;
`;

export default PageTitle;
