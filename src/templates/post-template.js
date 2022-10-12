import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import {
  Headings,
  Codeblock,
  Blockquote,
  PrismSetup,
} from "../components/Element";
import Layout from "../layout";
import Seo from "../components/Seo";
import Divider from "../components/Divider";
import CategoryLabel from "../components/CategoryLabel";
import PostNavigator from "../components/PostNavigator";
import Bio from "../components/Bio";
import Comments from "../components/Comments";

// CSS
import "katex/dist/katex.min.css";

const components = {
  h1: Headings.myH1,
  h2: Headings.myH2,
  h3: Headings.myH3,
  inlineCode: Codeblock,
  blockquote: Blockquote,
  pre: PrismSetup,
};

const PostTemplate = ({ data, pageContext, location }) => {
  const { siteUrl, description } = data.site.siteMetadata;
  const {
    mdx: {
      frontmatter: { author, title, category, date },
      body,
      excerpt,
    },
  } = data;

  return (
    <Layout>
      <Seo title={title} description={description || excerpt} />
      <Helmet>
        <link rel="canonical" href={`${siteUrl}${location.pathname}`} />
      </Helmet>
      <Wrapper>
        <div className="post-info">
          <CategoryLabel category={category} isLink="true" />
          <h2>{title}</h2>
          <Information>
            <Author> @{author} </Author>
            <Date>· {date} </Date>
          </Information>
          <Divider />
        </div>

        <div className="post-contents">
          <MDXProvider components={components}>
            <MDXRenderer>{body}</MDXRenderer>
          </MDXProvider>
        </div>
        <PostNavigator pageContext={pageContext} />
        <Bio path="post" />
        <Comments />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.section`
  max-width: 850px;
  margin: 10rem auto 4rem auto;
  color: var(--textColor);
  font-size: 17.6px;
  line-height: 1.7;
  /* info */
  .post-info {
    padding: 4rem 0 1rem;
    h2 {
      margin: 1.5rem 0;
      font-weight: 700;
      font-size: 5.5rem;
      color: var(--textColor);
    }
  }

  /* post contents */
  .post-contents {
    background-color: var(--contentBgColor);
    padding: 2rem ${(props) => props.theme.sideSpace.contentLarge};
    border-radius: 1rem;
    a {
      color: var(--textColor);
      text-decoration: underline;
    }
    b,
    strong {
      font-weight: var(--boldFontWeight);
      .kaatex {
        font-weight: 700;
      }
    }

    /* table */
    table {
      margin: 5rem auto;
      font-weight: var(--regularFontWeight);
      border-collapse: collapse;
    }
    th {
      padding: 1rem;
      background-color: ${(props) => props.theme.colors.gray2};
      border: 0.5px solid var(--textColor);
    }
    td {
      padding: 1rem 1.8rem;
      border: 0.5px solid var(--textColor);
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

    /* list */
    ul {
      list-style-type: circle;
    }
    ul,
    ol {
      margin: 1.2rem 0 2rem;
      padding-left: 3rem;
      font-weight: 300;
      & ul {
        list-style: circle;
      }
      ul ul {
        list-style: square;
      }
    }

    /* paragraph */
    p {
      font-weight: var(--regularFontWeight);
      word-break: break-all;
      margin: 1.3rem 0;

      a {
        color: rgb(32, 168, 234);
        font-weight: var(--boldFontWeight);
      }
      code {
        word-break: break-all;
      }
    }

    em {
      background-color: ${(props) => props.theme.colors.lightOrange};
      padding: 0.1rem 0.3rem;
      border-radius: 4px;
      color: rgb(125, 107, 113);
    }
    .katex {
      font-size: inherit;
    }

    /* 반응형 */
    @media screen and (max-width: ${(props) => props.theme.responsive.small}) {
      padding: 2rem ${(props) => props.theme.sideSpace.contentSmall};
    }
  }
`;

const Information = styled.div`
  margin-bottom: 32px;
  font-size: 16px;
`;

const Author = styled.span`
  font-weight: 700;
  color: var(--textColor);
`;

const Date = styled.span`
  font-weight: 300;
  color: var(--textColor);
`;

export const query = graphql`
  query GetSinglePost($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        description
      }
    }
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        author
        title
        category
        date(formatString: "MMMM Do, YYYY")
        slug
      }
      body
    }
  }
`;

export default PostTemplate;
