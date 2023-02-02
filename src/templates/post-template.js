import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layout';
import Seo from '../components/Seo';
import Post from '../components/Post';

// CSS
import 'katex/dist/katex.min.css';

const PostTemplate = ({ data, pageContext }) => {
  const { body, excerpt, fields } = data.mdx;
  const { category, date, title, tags } = data.mdx.frontmatter;
  const { siteUrl } = data.site.siteMetadata;

  return (
    <Layout>
      <Seo
        title={title}
        description={excerpt}
        url={`${siteUrl}${fields.slug}`}
      />
      <Post>
        <Post.Header
          category={category}
          title={title}
          date={date}
          tags={tags}
        />
        <Post.Body body={body} />
        <Post.Footer pageContext={pageContext} />
      </Post>
    </Layout>
  );
};

export const query = graphql`
  query GetSinglePost($slug: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt(pruneLength: 100, truncate: true)
      fields {
        slug
      }
      frontmatter {
        title
        category
        date(formatString: "YYYY년 M월 D일")
        tags
      }
    }
  }
`;

export default PostTemplate;
