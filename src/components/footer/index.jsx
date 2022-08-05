import React from "react";
import { Wrapper } from "./style";

const Footer = () => {
  return (
    <Wrapper>
      <p>&copy; {new Date().getFullYear()}, ch4md0m All rights reserved.</p>
    </Wrapper>
  );
};

export default Footer;
