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
    padding: 2rem 1.5rem;
    color: ${(props) => props.theme.colors.primary1};
    background: ${(props) => props.theme.colors.primary6};
    border-radius: 0 4px 4px 0;
    border-left: 5px solid ${(props) => props.theme.colors.lightRed};

    p {
      color: ${(props) => props.theme.colors.primary2};
    }
  }

  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    margin: 3rem 0.3rem;
  }
`;

export default Blockquote;
