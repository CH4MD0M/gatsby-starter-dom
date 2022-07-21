import React from "react";
const Code = ({ children }) => {
  return (
    <code
      style={{
        background: "var(--clr-primary-7)",
        color: "var(--clr-red-light)",
        padding: "0.1rem 0.3rem",
        margin: "0 0.12rem",
        borderRadius: "2px",
      }}
    >
      {children}
    </code>
  );
};

export default Code;
