import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Layout from "../layout";
import Seo from "../components/Seo";
import Article from "../components/Article";

const PostTemplate = ({ data, location, pageContext }) => {
  const { siteUrl, description, comments } = data.site.siteMetadata;
  const { author, title, category, date } = data.mdx.frontmatter;
  const { body, excerpt } = data.mdx;
  const utterancesRepo = comments?.utterances?.repo;

  return (
    <Layout>
      <Seo title={title} description={excerpt || description} />
      <Helmet>
        <link rel="canonical" href={`${siteUrl}${location.pathname}`} />
      </Helmet>
      <Article>
        <Article.Header
          category={category}
          title={title}
          author={author}
          date={date}
        />
        <Article.Body body={body} />
        <Article.Footer
          utterancesRepo={utterancesRepo}
          pageContext={pageContext}
        />
      </Article>
    </Layout>
  );
};

export const query = graphql`
  query GetSinglePost($slug: String!) {
    site {
      siteMetadata {
        siteUrl
        author
        description
        comments {
          utterances {
            repo
          }
        }
        socials {
          email
          github
          instagram
        }
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
