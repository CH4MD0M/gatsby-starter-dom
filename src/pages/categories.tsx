import React from 'react';
import { graphql, PageProps } from 'gatsby';
import orderBy from 'lodash/orderBy';

import useQuery from '@hooks/useQuery';
import Layout from '@layout/index';
import Seo from '@components/Seo';
import PageTitle from '@components/PageTitle';
import CategoryList from '@components/CategoryList';
import Divider from '@components/Divider';
import PostList from '@components/PostList';

const CategoryPage = ({ data }: PageProps<Queries.CategoryPageQuery>) => {
  const { nodes, group } = data.allMdx;
  const [selectedQuery] = useQuery();

  const categories = orderBy(group, ['fieldValue'], ['asc']);
  const filteredPosts = nodes.filter(
    post =>
      selectedQuery === 'all' || post.frontmatter?.category === selectedQuery,
  );

  return (
    <Layout>
      <Seo title="Categories" />
      <PageTitle>Categories.</PageTitle>
      <CategoryList selectedCategory={selectedQuery} categories={categories} />
      <Divider mt="0" />
      <PostList postList={filteredPosts} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query CategoryPage {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
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

export default CategoryPage;
