import React from "react";
import Layout from "../layout";
import Hero from "../components/Hero";
import { graphql, useStaticQuery } from "gatsby";
import Posts from "../components/Posts";
import styled from "styled-components";
const PostsPage = () => {
  const data = useStaticQuery(query);
  const {
    allMdx: { nodes: posts },
  } = data;
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title="all posts" />
    </Layout>
  );
};

const Wrapper = styled.div``;

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
          image {
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
