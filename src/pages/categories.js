import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import useCategory from "../hooks/useCategory";
import Layout from "../layout";
import Seo from "../components/Seo";
import PageTitle from "../components/PageTitle";
import Categories from "../components/Categories";
import Divider from "../components/Divider";
import PostList from "../components/PostList";

const CategoryPage = ({ data }) => {
  const { siteUrl, categories } = data.site.siteMetadata;
  const { nodes } = data.allMdx;
  const [category, selectCategory] = useCategory();

  return (
    <Layout>
      <Seo title="Home" />
      <Helmet>
        <link rel="canonical" href={siteUrl} />
      </Helmet>
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
    site {
      siteMetadata {
        siteUrl
        categories {
          name
          slug
        }
      }
    }
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
