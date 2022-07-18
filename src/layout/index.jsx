import React, { useState } from "react";
import Header from "../components/header";
import Sidebar from "../components/side-bar";
import Footer from "../components/footer";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="page-container">
        <Header toggle={toggle}></Header>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
