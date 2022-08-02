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
    padding: 1px 1.5rem;
    background: rgba(188, 204, 220, 0.1);
    border-radius: 10px;
    border-radius: 0 7px 7px 0;
    border-left: 7px solid var(--clr-primary-6);
    box-shadow: var(--dark-shadow);
    position: relative;

    p {
      color: var(--clr-primary-2);
    }
  }
  @media (min-width: 1170px) {
    .container {
      margin: 0 2rem;
    }
  }
`;

export default Blockquote;
