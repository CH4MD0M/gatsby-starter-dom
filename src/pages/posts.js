import React from "react";
import Layout from "../layout";
import Hero from "../components/Hero";
import { graphql, useStaticQuery } from "gatsby";
import Posts from "../components/Posts";
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
          date(formatString: "MMMM, Do YYYY")
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
