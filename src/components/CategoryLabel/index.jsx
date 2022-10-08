import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

// CSS
import * as S from "./style";

const CategoryLabel = ({ category, isLink }) => {
  const data = useStaticQuery(categoryQuery);
  const { categories } = data.site.siteMetadata;

  const { color: categoryColor } = categories.find((c) => {
    return c.slug === category;
  });

  return (
    <S.Wrapper color={categoryColor}>
      {isLink ? (
        <Link to={`/?category=${category}`} className="category-text">
          {category}
        </Link>
      ) : (
        <span className="category-text">{category}</span>
      )}
    </S.Wrapper>
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
