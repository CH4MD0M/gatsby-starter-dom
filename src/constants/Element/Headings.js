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
  color: var(--clr-primary-8);

  .underline {
    width: 70%;
    height: 3px;
    background: var(--clr-primary-4);
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
  margin-top: 3rem;
  color: var(--clr-primary-7);

  .underline {
    width: 7.5rem;
    height: 3px;
    background: var(--clr-primary-3);
  }
`;

const myH3 = ({ children }) => {
  return (
    <h3 style={{ margin: "2rem 0", color: "var(--clr-primary-8)" }}>
      {children}
    </h3>
  );
};

export { myH1, myH2, myH3 };
