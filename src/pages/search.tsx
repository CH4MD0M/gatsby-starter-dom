import React, { useState, useCallback, ChangeEvent } from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '@layout/index';
import Seo from '@components/Seo';
import PageTitle from '@components/PageTitle';
import SearchBar from '@components/SearchBar';
import Divider from '@components/Divider';
import PostList from '@components/PostList';

const SearchPage = ({ data }: PageProps<Queries.SearchPageQuery>) => {
  const posts = data.allMdx.nodes;
  const [query, setQuery] = useState('');

  const filteredPosts = useCallback(
    () =>
      posts.filter(post => {
        const { excerpt, frontmatter } = post;
        const { title, tags } = frontmatter;
        const lowerQuery = query.toLocaleLowerCase();

        return (
          excerpt?.toLocaleLowerCase().includes(lowerQuery) ||
          title?.toLocaleLowerCase().includes(lowerQuery) ||
          tags?.some(tag => tag.toLocaleLowerCase().includes(lowerQuery))
        );
      }),
    [query, posts],
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <Layout>
      <Seo title="Search" />
      <PageTitle>Search.</PageTitle>
      <SearchBar onChangeHandler={handleInputChange} />
      <Divider mt="6rem" mb="3rem" />
      <PostList postList={filteredPosts()} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query SearchPage {
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
