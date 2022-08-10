import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { Wrapper } from "./style";

const CategoryLabel = ({ category, isLink }) => {
  const data = useStaticQuery(categoryQuery);
  const { categories } = data.site.siteMetadata;

  const { color: categoryColor } = categories.find((c) => {
    return c.slug === category;
  });

  return (
    <Wrapper color={categoryColor}>
      {isLink ? (
        <Link to={`/?category=${category}`} className="category-text">
          {category}
        </Link>
      ) : (
        <span className="category-text">{category}</span>
      )}
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
