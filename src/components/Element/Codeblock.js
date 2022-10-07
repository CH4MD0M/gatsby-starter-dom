import React from "react";
import styled from "styled-components";

const Codeblock = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.code`
  margin: 0 0.1rem;
  padding: 0.1rem 0.3rem;
  background-color: var(--inlineCodeBackground);
  font-size: 1.7rem;
  line-height: 1.7;
  border-radius: 4px;
`;

export default Codeblock;
