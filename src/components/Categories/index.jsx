import React from "react";

// CSS
import * as S from "./style";

const Category = ({ title, selectedCategory, handleSelectCategory }) => {
  return selectedCategory === title ? (
    <S.Active onClick={() => handleSelectCategory(title)}>#{title}</S.Active>
  ) : (
    <S.Disabled onClick={() => handleSelectCategory(title)}>
      #{title}
    </S.Disabled>
  );
};

const Categories = ({ categories, category, selectCategory }) => {
  return (
    <S.FlexWrapper>
      <S.CategoriesWrapper>
        <Category
          title="all"
          selectedCategory={category}
          handleSelectCategory={selectCategory}
        />
        {categories.map((title, idx) => (
          <Category
            key={idx}
            title={title}
            selectedCategory={category}
            handleSelectCategory={selectCategory}
          />
        ))}
      </S.CategoriesWrapper>
    </S.FlexWrapper>
  );
};

export default Categories;
