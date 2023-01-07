import React from "react";
import { Link } from "gatsby";

// CSS
import * as S from "./style";

const Category = ({ title, selectedCategory }) => {
  return selectedCategory === title ? (
    <S.Active>#{title}</S.Active>
  ) : (
    <Link to={`/categories?q=${title}`}>
      <S.Disabled>#{title}</S.Disabled>
    </Link>
  );
};

const CategoryList = ({ selectedCategory, categories }) => {
  return (
    <S.FlexWrapper>
      <S.CategoryListWrapper>
        <Category title="all" selectedCategory={selectedCategory} />
        {categories.map((item, idx) => (
          <Category
            key={idx}
            title={item.fieldValue}
            selectedCategory={selectedCategory}
          />
        ))}
      </S.CategoryListWrapper>
    </S.FlexWrapper>
  );
};

export default CategoryList;
