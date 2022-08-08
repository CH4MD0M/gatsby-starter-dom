import React from "react";
import styled from "styled-components";
import SEO from "../components/Seo";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from "react-helmet";

import Layout from "../layout";
import {
  Blockquote,
  Codeblock,
  Headings,
  PrismSetup,
} from "../components/element";

const components = {
  h1: Headings.myH1,
  h2: Headings.myH2,
  h3: Headings.myH3,
  inlineCode: Codeblock,
  blockquote: Blockquote,
  pre: PrismSetup,
};

const PostTemplate = ({ data, location }) => {
  const { siteUrl, description } = data.site.siteMetadata;

  const {
    mdx: {
      frontmatter: { title, category, date },
      body,
      excerpt,
    },
  } = data;
  return (
    <Layout>
      <SEO title={title} description={description || excerpt} />
      <Helmet>
        <link rel="canonical" href={`${siteUrl}${location.pathname}`} />
      </Helmet>
      <Wrapper>
        {/* info */}
        <article>
          <div className="post-info">
            <span>{category}</span>
            <h2>{title}</h2>
            <p>{date}</p>
          </div>

          <div className="post-contents">
            <MDXProvider components={components}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
          </div>
        </article>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String) {
    site {
      siteMetadata {
        siteUrl
        description
      }
    }
    mdx(slug: { eq: $slug }) {
      frontmatter {
        title
        category
        date(formatString: "MMMM DD, YYYY")
      }
      excerpt(pruneLength: 150)
      body
    }
  }
`;

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 14rem auto 4rem auto;
  background: ${(props) => props.theme.colors.primary2};

  /* info */
  .post-info {
    padding: 4rem 0;
    text-align: center;
    span {
      background: ${(props) => props.theme.colors.primary2};
      color: ${(props) => props.theme.colors.white};
      border-radius: 4px;
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: ${(props) => props.theme.text.spacing};
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 700;
      font-size: 4rem;
      color: ${(props) => props.theme.colors.white};
    }
    p {
      color: ${(props) => props.theme.colors.primary1};
    }
  }

  /* post contents */
  .post-contents {
    background-color: ${(props) => props.theme.colors.white};
    padding: 2rem 2.3rem;
    border-radius: 1rem;

    table {
      margin: 3rem auto;
      font-size: 1rem;
      border-collapse: collapse;
    }
    th {
      background-color: ${(props) => props.theme.colors.primary5};
      padding: 0.5rem 1rem;
      border: 0.5px solid ${(props) => props.theme.colors.primary2};
    }
    td {
      padding: 0.3rem 1.2rem;
      border: 0.5px solid ${(props) => props.theme.colors.primary2};
    }
    td:first-child {
      text-align: center;
    }
    th:first-child,
    td:first-child {
      border-left: none;
    }
    th:last-child,
    td:last-child {
      border-right: none;
    }
    ul {
      list-style-type: circle;
    }
    ul,
    ol {
      padding: 0 2rem;
      color: ${(props) => props.theme.colors.primary2};
    }

    p {
      line-height: 1.7rem;
      color: ${(props) => props.theme.colors.primary2};
      a {
        color: rgb(32, 168, 234);
      }
    }

    em {
      background-color: ${(props) => props.theme.colors.lightOrange};
      padding: 0.1rem 0.3rem;
      border-radius: 2px;
      color: rgb(125, 107, 113);
    }
  }
`;

export default PostTemplate;
