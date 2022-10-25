import React from "react";
import styled from "styled-components";

const PageTitle = ({ children }) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

const TitleWrapper = styled.h2`
  margin-bottom: 2rem;
  padding: 0.8rem 1.2rem;
  width: fit-content;
  border-radius: 6px;
  background: var(--pageTitleBgColor);
  color: var(--bgColor);
  font-size: 2.5rem;
`;

export default PageTitle;
