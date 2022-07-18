import React from "react";
import Hero from "../components/Hero";
import Layout from "../layout";

import { graphql, useStaticQuery } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
};

export default IndexPage;
