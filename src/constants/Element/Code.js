import React from "react";
const Code = ({ children }) => {
  return (
    <code
      style={{
        background: "transparent",
        color: "var(--clr-red-light)",
        padding: "0.1rem 0.3rem",
        margin: "0 0.12rem",
        borderRadius: "2px",
        border: "1px solid var(--clr-red-light)",
      }}
    >
      {children}
    </code>
  );
};

export default Code;
