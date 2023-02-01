import React, { useCallback, useState } from 'react';
import { graphql } from 'gatsby';

import Seo from '../components/Seo';
import Divider from '../components/Divider';
import PostList from '../components/PostList';
import Layout from '../layout';
import PageTitle from '../components/PageTitle';
import SearchBar from '../components/SearchBar';

const SearchPage = ({ data }) => {
  const posts = data.allMdx.nodes;
  const [query, setQuery] = useState('');

  const filteredPosts = useCallback(
    posts.filter(post => {
      const { excerpt, frontmatter } = post;
      const { title, tags } = frontmatter;
      const lowerQuery = query.toLocaleLowerCase();

      return (
        excerpt?.toLocaleLowerCase().includes(lowerQuery) ||
        title?.toLocaleLowerCase().includes(lowerQuery) ||
        tags?.includes(lowerQuery)
      );
    }),
    [query],
  );

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <Layout>
      <Seo title="Search" />
      <PageTitle>Search.</PageTitle>
      <SearchBar onChangeHandler={handleInputChange} />
      <Divider mt="6rem" mb="3rem" />
      <PostList postList={filteredPosts} />
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        id
        excerpt(pruneLength: 200, truncate: true)
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
  }
`;
export default SearchPage;
