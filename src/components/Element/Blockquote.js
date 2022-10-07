import React from "react";
import styled from "styled-components";

const Blockquote = ({ children }) => {
  return (
    <Wrapper>
      <div className="container">{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.blockquote`
  margin: 4rem 0;

  .container {
    padding: 1.8rem 2.4rem;
    color: ${(props) => props.theme.colors.primary1};
    background: var(--blockQuoteBackground);
    border-left: 4px solid var(--blockQuoteBorder);

    p {
      color: var(--textColor);
    }
  }
`;

export default Blockquote;
