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
  margin: 4rem 2rem;

  .container {
    padding: 1px 1.5rem;
    color: ${(props) => props.theme.colors.primary1};
    background: rgba(188, 204, 220, 0.1);
    border-radius: 0 4px 4px 0;
    border-left: 4px solid ${(props) => props.theme.colors.primary5};
    box-shadow: ${(props) => props.theme.effect.shadow};

    p {
      color: ${(props) => props.theme.colors.primary2};
    }
  }
`;

export default Blockquote;
