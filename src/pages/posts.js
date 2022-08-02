import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../layout";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import Head from "../components/head";

const PostsPage = () => {
  const data = useStaticQuery(query);

  const {
    allMdx: { nodes: posts },
  } = data;
  return (
    <Layout>
      <Head title="Posts" />
      <Hero />
      <Posts posts={posts} title="all posts" />
    </Layout>
  );
};

export default PostsPage;

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "MMMM DD, YYYY")
          slug
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`;
