import React, { useState } from 'react';
import { graphql, PageProps } from 'gatsby';
import orderBy from 'lodash/orderBy';
import styled, { keyframes } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';

import { useQuery } from '@hooks/useQuery';
import Layout from '@layout/index';
import Seo from '@components/Seo';
import PageTitle from '@components/PageTitle';
import TagList from '@components/TagList';
import Divider from '@components/Divider';
import PostList from '@components/PostList';

const TagsPage = ({ data }: PageProps<Queries.TagsPageQuery>) => {
  const { nodes, group } = data.allMdx;
  const [selectedQuery] = useQuery();
  const [tagListOpen, setTagListOpen] = useState(false);

  const tags = orderBy(group, ['totalCount'], ['desc']);
  const filteredPosts = nodes.filter(
    post => post.frontmatter?.tags?.indexOf(selectedQuery) !== -1,
  );

  return (
    <Layout>
      <Seo title="Tags" />
      <PageTitle>Tags.</PageTitle>
      <ToggleBtnWrapper tagListOpen={tagListOpen}>
        <IoIosArrowDown onClick={() => setTagListOpen(prev => !prev)} />
      </ToggleBtnWrapper>
      <AnimatePresence>
        {tagListOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <TagList selectedTag={selectedQuery} tags={tags} />
          </motion.div>
        )}
      </AnimatePresence>
      <Divider mt="0" />
      <PostList postList={filteredPosts} />
    </Layout>
  );
};

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
`;

const ToggleBtnWrapper = styled.div<{ tagListOpen: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;

  svg {
    margin: 2rem 4rem;
    cursor: pointer;
    font-size: 3rem;
    transform-origin: center;
    transform: rotate(
      ${({ tagListOpen }) => (tagListOpen ? '180deg' : '0deg')}
    );
    transition: all 0.4s ease;
    animation: ${bounceAnimation} 1s infinite;
  }
`;

export const pageQuery = graphql`
  query TagsPage {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      group(field: frontmatter___tags) {
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

export default TagsPage;
