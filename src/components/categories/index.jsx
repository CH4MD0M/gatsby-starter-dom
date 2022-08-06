import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { Wrapper } from "./style";

const Categories = () => {
  const {
    allMdx: { distinct },
  } = useStaticQuery(query);

  return (
    <Wrapper>
      <h2>Categories</h2>
      {distinct.map((category, index) => {
        return (
          <li key={index}>
            <Link to={`/${category}`} className="category">
              {category}
            </Link>
          </li>
        );
      })}
    </Wrapper>
  );
};

const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`;

export default Categories;
