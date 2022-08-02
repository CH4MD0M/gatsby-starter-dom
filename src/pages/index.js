import { graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import SEO from "../components/Seo";
import Layout from "../layout";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Helmet>
        <link rel="canonical" href="" />
      </Helmet>
      <Hero />
    </Layout>
  );
};

export default IndexPage;

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        author
        social {
          email
          github
          instagram
        }
      }
    }
  }
`;
