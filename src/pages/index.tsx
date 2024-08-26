import React from 'react';
import { graphql } from 'gatsby';

import Layout from '@layout/index';
import Seo from '@components/Seo';
import Hero from '@components/Hero';

interface IndexPageProps {
  data: Queries.IndexPageQuery;
}

const IndexPage = ({ data }: IndexPageProps) => {
  const { name } = data.site?.siteMetadata!;

  return (
    <Layout>
      <Seo title="Home" />
      <Hero name={name} />
    </Layout>
  );
};

export const pageQquery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        name
      }
    }
  }
`;

export default IndexPage;
