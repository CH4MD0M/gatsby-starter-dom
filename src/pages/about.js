import React from "react";
import Layout from "../layout";
import Seo from "../components/Seo";
import { graphql, useStaticQuery } from "gatsby";

const AboutPage = () => {
  const result = useStaticQuery(query);
  console.log(result.allMdx.nodes);
  return (
    <Layout>
      <Seo title="About" />
    </Layout>
  );
};

const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        slug
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          title
          slug
          category
        }
      }
    }
  }
`;
export default AboutPage;
