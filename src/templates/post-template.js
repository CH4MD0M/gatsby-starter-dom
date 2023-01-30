import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout';
import Seo from '../components/Seo';
import Article from '../components/Article';

// CSS
import 'katex/dist/katex.min.css';

const PostTemplate = ({ data, pageContext }) => {
  const { body, excerpt, fields } = data.mdx;
  const { author, category, date, title, tags } = data.mdx.frontmatter;
  const { siteUrl, comments } = data.site.siteMetadata;
  const utterancesRepo = comments?.utterances?.repo;
  return (
    <Layout>
      <Seo
        title={title}
        description={excerpt}
        url={`${siteUrl}${fields.slug}`}
      />
      <Article>
        <Article.Header
          category={category}
          title={title}
          author={author}
          date={date}
          tags={tags}
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
  query GetSinglePost($slug: String) {
    site {
      siteMetadata {
        siteUrl
        comments {
          utterances {
            repo
          }
        }
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt(pruneLength: 100, truncate: true)
      fields {
        slug
      }
      frontmatter {
        author
        title
        category
        date(formatString: "YYYY년 M월 D일")
        tags
      }
    }
  }
`;

export default PostTemplate;
