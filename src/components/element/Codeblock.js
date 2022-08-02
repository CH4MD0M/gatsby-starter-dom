import React from "react";
import styled from "styled-components";

const Codeblock = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.code`
  background-color: var(--clr-green-light);
  color: rgb(85, 117, 113);
  border-radius: 4px;
  padding: 0.05em 0.35em;
`;

export default Codeblock;
