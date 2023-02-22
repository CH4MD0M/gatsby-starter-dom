import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import PageTitle from '../components/PageTitle';
import PostList from '../components/PostList';

const IndexPage = ({ data }) => {
  const { name } = data.site.siteMetadata;
  const { nodes } = data.allMdx;

  return (
    <Layout>
      <Seo title="Home" />
      <Hero name={name} />
      <PageTitle>latest.</PageTitle>
      <PostList postList={nodes} />
    </Layout>
  );
};

export const pageQquery = graphql`
  query {
    site {
      siteMetadata {
        name
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
      nodes {
        id
        excerpt(pruneLength: 200, truncate: true)
        fields {
          slug
        }
        frontmatter {
          title
          category
          date(formatString: "YYYY년 M월 D일")
          tags
        }
      }
    }
  }
`;

export default IndexPage;
