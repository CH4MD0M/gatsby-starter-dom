import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import { Wrapper } from "./style";

const CategoryLabel = ({ category }) => {
  const data = useStaticQuery(categoryQuery);
  const { categories } = data.site.siteMetadata;

  const { color: categoryColor } = categories.find((c) => {
    return c.slug === category;
  });

  return (
    <Wrapper color={categoryColor}>
      <Link to={`/?category=${category}`} className="category-text">
        {category}
      </Link>
    </Wrapper>
  );
};

const categoryQuery = graphql`
  query {
    site {
      siteMetadata {
        categories {
          name
          slug
          color
        }
      }
    }
  }
`;
export default CategoryLabel;
