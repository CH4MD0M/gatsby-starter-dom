import React from "react";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()}, ch4md0m All rights reserved.</p>
    </footer>
  );
};

export default Footer;
