import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../layout";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import SEO from "../components/Seo";
import { Helmet } from "react-helmet";

const PostsPage = () => {
  const data = useStaticQuery(query);

  const {
    allMdx: { nodes: posts },
  } = data;
  return (
    <Layout>
      <SEO title="Posts" />
      <Helmet>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      </Helmet>
      <Hero />
      <Posts posts={posts} title="all posts" />
    </Layout>
  );
};

export default PostsPage;

export const query = graphql`
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
