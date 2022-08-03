import React from "react";
import Layout from "../layout";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/Seo";
import { Helmet } from "react-helmet";

const PostTemplate = ({ data, location }) => {
  const { siteUrl, description } = data.site.siteMetadata;

  const {
    mdx: {
      frontmatter: { title, author, category, thumbnail, date },
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
            <div className="underline" />
          </div>

          <div className="post-contents">
            <MDXRenderer>{body}</MDXRenderer>
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
    mdx(frontmatter: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 150)
      frontmatter {
        category
        author
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

const Wrapper = styled.section`
  width: 92vw;
  max-width: var(--max-width);
  margin: 14rem auto 4rem auto;

  /* info */
  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: left;
    span {
      background: var(--clr-primary-5);
      color: var(--clr-white);
      border-radius: var(--radius);
      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
      letter-spacing: var(--spacing);
    }
    h2 {
      margin: 1.25rem 0;
      font-weight: 700;
      font-size: 4rem;
      color: var(--clr-white);
    }
    p {
      color: var(--clr-primary-6);
    }
    .underline {
      width: 10rem;
      height: 1px;
      background: var(--clr-primary-8);
      margin-bottom: 1rem;
    }
  }

  /* post contents */
  .post-contents {
    background-color: var(--clr-primary-8);
    padding: 2rem 2.3rem;
    border-radius: 1rem;
  }

  table {
    margin: 3rem auto;
    font-size: 1rem;
    border-collapse: collapse;
  }
  th {
    background-color: var(--clr-primary-6);
    padding: 0.5rem 1rem;
    border: 0.5px solid var(--clr-primary-2);
  }
  td {
    padding: 0.3rem 1.2rem;
    border: 0.5px solid var(--clr-primary-2);
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

  ul,
  ol {
    padding: 0 2rem;
    color: var(--clr-primary-2);
  }

  p {
    color: var(--clr-primary-2);
    a {
      color: rgb(32, 168, 234);
    }
  }

  em {
    background-color: var(--clr-orange-light);
    padding: 0.1rem 0.3rem;
    border-radius: 2px;
    color: rgb(125, 107, 113);
  }

  @media (min-width: 1300px) {
    & {
      width: 50vw;
    }
    .main-img {
      width: 75%;
      display: block;
      margin: 0 auto;
    }
  }
`;

export default PostTemplate;
