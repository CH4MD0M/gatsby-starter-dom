import React from "react";
import { graphql } from "gatsby";
import Posts from "../components/Posts";
import Layout from "../layout";

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
