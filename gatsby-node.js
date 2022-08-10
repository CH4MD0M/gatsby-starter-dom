const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            title
            slug
            category
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMdx.nodes.forEach((node, index) => {
    createPage({
      path: `${node.slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug: node.slug,
      },
    });
  });
};
