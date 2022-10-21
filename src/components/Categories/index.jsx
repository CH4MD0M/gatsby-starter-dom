import React from "react";

// CSS
import * as S from "./style";

const SelectedCategory = ({ category }) => {
  const { name } = category;
  return <S.Active>#{name}</S.Active>;
};

const Category = ({ category, selectCategory }) => {
  const { name, slug } = category;

  return (
    <S.Disabled
      onClick={() => {
        selectCategory(slug);
      }}
    >
      #{name}
    </S.Disabled>
  );
};

const Categories = ({ categories, category, selectCategory }) => {
  return (
    <S.FlexWrapper>
      <S.Wrapper>
        {categories.map((item, index) => {
          if (category === item.slug)
            return <SelectedCategory key={index} category={item} />;
          return (
            <Category
              category={item}
              key={index}
              selectCategory={selectCategory}
            />
          );
        })}
      </S.Wrapper>
    </S.FlexWrapper>
  );
};

export default Categories;
