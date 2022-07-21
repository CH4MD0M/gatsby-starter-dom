import React from "react";
import Layout from "../layout";
import Hero from "../components/Hero";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Banner from "../components/Banner";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, category, image, date, embeddedImages },
      body,
    },
  } = data;
  return (
    <Layout>
      <Hero />
      <Wrapper>
        {/* info */}
        <article>
          <GatsbyImage
            image={getImage(image)}
            alt={title}
            className="main-img"
          />

          <div className="post-info">
            <span>{category}</span>
            <h2>{title}</h2>
            <p>{date}</p>
            <div className="underline" />
          </div>
          <MDXRenderer embeddedImages={embeddedImages}>{body}</MDXRenderer>
        </article>
        {/* banner */}
        <article>
          <Banner />
        </article>
      </Wrapper>
    </Layout>
  );
};

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        category
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        image {
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
  margin: 0 auto;
  margin-bottom: 4rem;

  & > article:nth-child(1) {
    background-color: var(--clr-primary-2);
    padding: 6rem 2.3rem 0 2.3rem;
    border-radius: 1rem;
  }
  .post-info {
    margin: 2rem 0 4rem 0;
    text-align: center;
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
      font-weight: 400;
      color: var(--clr-white);
    }
    p {
      color: var(--clr-primary-6);
    }
    .underline {
      width: 5rem;
      height: 1px;
      background: var(--clr-primary-8);
      margin: 0 auto;
      margin-bottom: 1rem;
    }
  }
  ul {
    list-style-type: circle;
    padding: 0 2rem;
    color: var(--clr-primary-6);
  }
  p {
    line-height: 1.7;
  }
  em {
    background-color: var(--clr-orange-light);
    padding: 0.1rem 0.3rem;
    border-radius: 2px;
    color: var(--clr-primary-2);
  }
  @media (min-width: 992px) {
    & {
      width: 92vw;
    }
    .main-img {
      width: 75%;
      display: block;
      margin: 0 auto;
    }
  }
  @media (min-width: 1170px) {
    & {
      display: grid;
      grid-template-columns: 1fr 250px;
      column-gap: 1rem;
    }
  }
`;

export default PostTemplate;
