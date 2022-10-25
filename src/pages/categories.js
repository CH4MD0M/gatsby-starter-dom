import React, { useMemo } from "react";
import { graphql } from "gatsby";
import _ from "lodash";

import useCategory from "../hooks/useCategory";
import Layout from "../layout";
import Seo from "../components/Seo";
import PageTitle from "../components/PageTitle";
import Categories from "../components/Categories";
import Divider from "../components/Divider";
import PostList from "../components/PostList";

const CategoryPage = ({ data }) => {
  const { nodes } = data.allMdx;
  const categories = useMemo(
    () => _.uniq(nodes.map((node) => node.frontmatter.category)),
    []
  );
  const [category, selectCategory] = useCategory();

  return (
    <Layout>
      <Seo title="Categories" />
      <PageTitle>Categories.</PageTitle>
      <Categories
        category={category}
        categories={categories}
        selectCategory={selectCategory}
      />
      <Divider mt="0" />
      <PostList category={category} postList={nodes} />
    </Layout>
  );
};

export default CategoryPage;

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        slug
        frontmatter {
          title
          category
          date(formatString: "YYYY년 M월 D일")
        }
        excerpt(pruneLength: 300, truncate: true)
      }
    }
  }
`;
