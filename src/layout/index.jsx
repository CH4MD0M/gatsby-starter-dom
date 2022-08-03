import React, { useState } from "react";
import Header from "../components/header";
import Sidebar from "../components/side-bar";
import Footer from "../components/footer";
import { graphql, useStaticQuery } from "gatsby";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="page-container">
        <Header title={data.site.siteMetadata.title} toggle={toggle}></Header>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
