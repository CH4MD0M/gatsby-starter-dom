import React from "react";
import styled from "styled-components";

const myH1 = ({ children }) => {
  return (
    <HeadingOne>
      <h1>{children}</h1>
      <div className="underline" />
    </HeadingOne>
  );
};
const HeadingOne = styled.div`
  margin: 7rem 0 2rem;
  color: ${(props) => props.theme.colors.headingColor};
  h1 {
    font-weight: 700;
    font-size: 2.7rem;
  }
  .underline {
    width: 40%;
    height: 2px;
    border-radius: 4px;
    background: ${(props) => props.theme.colors.primary4};
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    margin: 4rem 0 2rem;
    h1 {
      font-size: 2.5rem;
    }
  }
`;

const myH2 = ({ children }) => {
  return (
    <HeadingTwo>
      <h2>{children}</h2>
      <div className="underline" />
    </HeadingTwo>
  );
};
const HeadingTwo = styled.div`
  margin: 5rem 0 2rem;
  padding-left: 1rem;
  color: ${(props) => props.theme.colors.headingColor};
  border-left: 4px solid ${(props) => props.theme.colors.primary4};
  h2 {
    font-weight: 700;
    font-size: 2.4rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    margin: 4rem 0 2rem;
    h2 {
      font-size: 2.2rem;
    }
  }
`;

const myH3 = ({ children }) => {
  return (
    <HeadingThree>
      <h3>{children}</h3>
    </HeadingThree>
  );
};
const HeadingThree = styled.div`
  margin: 5rem 0 1rem;
  color: ${(props) => props.theme.colors.headingColor};

  h3 {
    font-weight: 700;
    font-size: 2rem;
  }
`;

export { myH1, myH2, myH3 };
