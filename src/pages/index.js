import React from "react";

import { graphql, useStaticQuery } from "gatsby";

import Layout from "../layout";
import Seo from "../components/Seo";
import PostList from "../components/PostList";

import Hero from "../components/Hero";
import PageTitle from "../components/PageTitle";

const IndexPage = () => {
  const data = useStaticQuery(pageQquery);
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

const pageQquery = graphql`
  query {
    site {
      siteMetadata {
        name
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
      nodes {
        id
        excerpt(pruneLength: 300, truncate: true)
        fields {
          slug
        }
        frontmatter {
          title
          category
          date(formatString: "YYYY년 M월 D일")
        }
      }
    }
  }
`;

export default IndexPage;
