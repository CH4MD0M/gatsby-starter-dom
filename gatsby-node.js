const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx(
        filter: { frontmatter: { category: { ne: null } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
            slug
            frontmatter {
              date(formatString: "YYYY.MM.DD")
              title
              slug
              category
            }
          }
          next {
            frontmatter {
              slug
              title
            }
          }
          previous {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  const posts = result.data.allMdx.edges;

  posts.forEach((post) => {
    createPage({
      path: `/content/${post.node.frontmatter.slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug: post.node.frontmatter.slug,
        previous: post.previous,
        next: post.next,
      },
    });
  });
};
