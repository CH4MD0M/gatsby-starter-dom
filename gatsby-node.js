const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      categories: allMdx {
        totalCount
        distinct(field: frontmatter___category)
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/posts/${slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug,
      },
    });
  });

  result.data.categories.distinct.forEach((category) => {
    createPage({
      path: `${category}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: { category },
    });
  });
};
