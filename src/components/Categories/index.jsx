import React from "react";

import { Wrapper, CategoriesWrapper, Active, Disabled } from "./style";

const SelectedCategory = ({ category }) => {
  const { name } = category;
  return <Active>{name}</Active>;
};

const Category = ({ category, selectCategory }) => {
  const { name, slug } = category;
  return (
    <Disabled
      onClick={() => {
        selectCategory(slug);
      }}
    >
      {name}
    </Disabled>
  );
};

const Categories = ({ categories, category, selectCategory }) => {
  return (
    <Wrapper>
      <h2>Categories</h2>
      <CategoriesWrapper>
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
      </CategoriesWrapper>
    </Wrapper>
  );
};

export default Categories;
