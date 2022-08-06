import React from "react";
import { Helmet } from "react-helmet";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../layout";
import SEO from "../components/Seo";
import Categories from "../components/categories";
import Posts from "../components/Posts";

import styled from "styled-components";

const IndexPage = () => {
  const breakpoints = useBreakpoint();
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
      <Wrapper>
        {!breakpoints.sm && <Categories />}
        <MainContet>
          <Posts posts={posts} title="all posts" />
        </MainContet>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-height: 85vh;
  align-items: flex-start;
  flex-direction: row-reverse;

  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    display: block;
    margin-top: 0;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
    margin-top: 0;
  }
`;
const MainContet = styled.div`
  width: calc(100% - 230px - 10rem);
  margin-right: 10rem;
  @media screen and (max-width: ${(props) => props.theme.responsive.large}) {
    width: 100%;
    margin-top: 2em;
  }
`;

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

export default IndexPage;
