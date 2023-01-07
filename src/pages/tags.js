import React from "react";
import { graphql } from "gatsby";
import orderBy from "lodash/orderBy";

import useQuery from "../hooks/useQuery";
import Layout from "../layout";
import Seo from "../components/Seo";
import PageTitle from "../components/PageTitle";
import TagList from "../components/TagList";
import Divider from "../components/Divider";
import PostList from "../components/PostList";

const TagsPage = ({ data }) => {
  const { nodes, group } = data.allMdx;
  const [selectedQuery] = useQuery();

  const tags = orderBy(group, ["totalCount"], ["desc"]);
  const filteredPosts = nodes.filter(
    (post) =>
      selectedQuery === "all" ||
      post.frontmatter.tags.indexOf(selectedQuery) !== -1
  );

  return (
    <Layout>
      <Seo title="Tags" />
      <PageTitle>Tags.</PageTitle>
      <TagList selectedTag={selectedQuery} tags={tags} />
      <Divider mt="0" />
      <PostList postList={filteredPosts} />
    </Layout>
  );
};

export const pageQuery = graphql`
  {
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
