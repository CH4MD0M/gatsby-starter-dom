import React, { ChangeEvent, useMemo } from 'react';
import { graphql, PageProps } from 'gatsby';

import { useSearchInput } from '@hooks/useSearchInput';

import Layout from '@layout/index';
import Seo from '@components/Seo';
import PageTitle from '@components/PageTitle';
import SearchBar from '@components/SearchBar';
import PostList from '@components/PostList';

const SearchPage = ({ data }: PageProps<Queries.SearchPageQuery>) => {
  const posts = data.allMdx.nodes;
  const [searchKeyword, debouncedSearchKeyword, setSearchKeyword] =
    useSearchInput('search-keyword', '');

  const filteredPosts = useMemo(() => {
    const lowerQuery = debouncedSearchKeyword.toLocaleLowerCase();
    if (!lowerQuery) return [];

    return posts.filter(post => {
      const { excerpt, frontmatter } = post;
      const { title, tags } = frontmatter;

      return (
        excerpt?.toLocaleLowerCase().includes(lowerQuery) ||
        title?.toLocaleLowerCase().includes(lowerQuery) ||
        tags?.some(tag => tag.toLocaleLowerCase().includes(lowerQuery))
      );
    });
  }, [debouncedSearchKeyword, posts]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  return (
    <Layout>
      <Seo title="Search" />
      <PageTitle>Search.</PageTitle>
      <SearchBar
        onChangeHandler={handleInputChange}
        searchKeyword={searchKeyword}
      />

      <PostList postList={filteredPosts} />
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
