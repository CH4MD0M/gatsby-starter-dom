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
  margin-top: 4rem;
  color: var(--clr-primary-2);

  .underline {
    width: 40%;
    height: 4px;
    border-radius: 4px;
    background: var(--clr-primary-4);
    margin-top: -5px;
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
  margin-top: 4rem;
  color: var(--clr-primary-2);
  h2 {
    border-left: 4px solid var(--clr-primary-4);
    padding-left: 1rem;
  }
`;

const myH3 = ({ children }) => {
  return (
    <h3
      style={{
        margin: "2rem 0",
        color: "var(--clr-primary-2)",
        fontSize: "1.2rem",
      }}
    >
      {children}
    </h3>
  );
};

export { myH1, myH2, myH3 };
