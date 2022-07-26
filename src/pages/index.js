import React from "react";
import Hero from "../components/Hero";
import Layout from "../layout";
import { HOME_TITLE } from "../constants/meta";

import { graphql, useStaticQuery } from "gatsby";
import Head from "../components/head";

const IndexPage = () => {
  return (
    <Layout>
      <Head title={HOME_TITLE} />
      <Hero />
    </Layout>
  );
};

export default IndexPage;
