import React from "react";
import Layout from "../layout";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import { graphql } from "gatsby";

const CategoryTemplate = (props) => {
  const {
    data: {
      allMdx: { nodes: posts },
    },
  } = props;
  const {
    pageContext: { category },
  } = props;

  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={`${category}`} />
    </Layout>
  );
};

export default CategoryTemplate;

export const query = graphql`
  query GetCategories($category: String) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          author
          category
          slug
          date(formatString: "MMMM Do, YYYY")
          thumbnail {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
      }
    }
  }
`;
