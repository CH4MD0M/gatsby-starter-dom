import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { siteUrl } from "../../blog-config";

import useCategory from "../hooks/useCategory";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

import Layout from "../layout";
import Seo from "../components/Seo";
import Categories from "../components/Categories";
import Posts from "../components/Posts";
import Bio from "../components/Bio";
import Divider from "../components/Divider";

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
        <link rel="canonical" href={siteUrl} />
      </Helmet>

      <Wrapper>
        <Bio path="main" />
        <Divider mt="0" mb="1rem" />
        <Categories
          category={category}
          categories={siteMetadata.categories}
          selectCategory={selectCategory}
        />
        <Posts category={category} posts={posts} count={count} />
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

  @media screen and (max-width: 1300px) {
    display: block;
    margin: 0 6rem;
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.md}) {
    margin: 0;
  }
`;

const query = graphql`
  {
    site {
      siteMetadata {
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
      }
    }
  }
`;

export default IndexPage;
