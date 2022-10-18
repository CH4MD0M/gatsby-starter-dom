import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../layout";
import Seo from "../components/Seo";
import Article from "../components/Article";
import { variants } from "../utils/framer";

const PostTemplate = ({ data, location, pageContext }) => {
  const { siteUrl, description } = data.site.siteMetadata;
  const { author, title, category, date } = data.mdx.frontmatter;
  const { body, excerpt } = data.mdx;

  return (
    <Layout>
      <Seo title={title} description={excerpt || description} />
      <Helmet>
        <link rel="canonical" href={`${siteUrl}${location.pathname}`} />
      </Helmet>

      <Article
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <Article.Header
          category={category}
          title={title}
          author={author}
          date={date}
        />
        <Article.Body body={body} />
        <Article.Footer pageContext={pageContext} />
      </Article>
    </Layout>
  );
};

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
        date(formatString: "YYYY년 M월 D일")
        slug
      }
      body
      excerpt(pruneLength: 100, truncate: true)
    }
  }
`;

export default PostTemplate;
