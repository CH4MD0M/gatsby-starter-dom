import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../layout";
import Seo from "../components/Seo";
import PostList from "../components/PostList";

import Hero from "../components/Hero";
import PageTitle from "../components/PageTitle";

const IndexPage = () => {
  const data = useStaticQuery(query);
  const { siteUrl } = data.site.siteMetadata;
  const { nodes } = data.allMdx;

  return (
    <Layout>
      <Seo title="Home" />
      <Helmet>
        <link rel="canonical" href={siteUrl} />
      </Helmet>

      <Hero />
      <PageTitle>latest.</PageTitle>
      <PostList postList={nodes} />
    </Layout>
  );
};

const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
      nodes {
        id
        slug
        frontmatter {
          title
          category
          date(formatString: "YYYY년 M월 D일")
        }
        excerpt(pruneLength: 300, truncate: true)
      }
    }
  }
`;

export default IndexPage;
