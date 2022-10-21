import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../layout";
import Seo from "../components/Seo";
import PageTitle from "../components/PageTitle";
import Bio from "../components/Bio";

const AboutPage = ({ data }) => {
  const { siteUrl } = data.site.siteMetadata;
  return (
    <Layout>
      <Seo title="About" />
      <Helmet>
        <link rel="canonical" href={siteUrl} />
      </Helmet>
      <PageTitle>About.</PageTitle>
      <Bio />
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        categories {
          name
          slug
        }
      }
    }
  }
`;
