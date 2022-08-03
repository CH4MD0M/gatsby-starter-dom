import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import SEO from "../components/Seo";
import Layout from "../layout";

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Helmet>
        <link rel="canonical" href="" />
      </Helmet>
      <Hero />
    </Layout>
  );
};

export default AboutPage;
