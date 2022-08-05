import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../layout";
import Posts from "../components/Posts";
import SEO from "../components/Seo";

const IndexPage = () => {
  const data = useStaticQuery(query);
  const {
    allMdx: { nodes: posts },
  } = data;

  return (
    <Layout>
      <SEO title="Home" />
      <Helmet>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      </Helmet>
      <Posts posts={posts} title="all posts" />
    </Layout>
  );
};

export default IndexPage;

const query = graphql`
  {
    site {
      siteMetadata {
        title
        siteUrl
        author
        social {
          email
          github
          instagram
        }
      }
    }
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
