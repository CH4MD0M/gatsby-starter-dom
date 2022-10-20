import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";

import useCategory from "../hooks/useCategory";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

import Layout from "../layout";
import Seo from "../components/Seo";
import Categories from "../components/Categories";
import PostList from "../components/PostList";

import Divider from "../components/Divider";
import Hero from "../components/Hero";

const IndexPage = () => {
  const {
    site: { siteMetadata },
    allMdx: { nodes: posts },
  } = useStaticQuery(query);

  const [count, setCount] = useState(10);
  const [category, selectCategory] = useCategory();
  const [setTarget] = useInfiniteScroll(loadPosts);

  function loadPosts() {
    setCount((prev) => {
      if (prev + 4 <= posts.length) return prev + 4;
      else return posts.length;
    });
  }

  return (
    <Layout>
      <Seo title="Home" />
      <Helmet>
        <link rel="canonical" href={siteMetadata.siteUrl} />
      </Helmet>

      <Wrapper>
        <Hero />
        <Divider mt="1rem" mb="1rem" />
        <Categories
          category={category}
          categories={siteMetadata.categories}
          selectCategory={selectCategory}
        />
        <PostList category={category} posts={posts} count={count} />
        <div ref={setTarget} />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  min-height: 85vh;
  max-width: 850px;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    margin: 0;
  }
`;

const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        title
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

export default IndexPage;
