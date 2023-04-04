import React from 'react';
import { Link } from 'gatsby';

// CSS
import * as S from './style';

interface CategoryProps {
  title: string;
  selectedCategory: string;
}

interface CategoryListProps {
  selectedCategory: string;
  categories: Array<{ fieldValue: string }>;
}

const Category = ({ title, selectedCategory }: CategoryProps) => {
  return selectedCategory === title ? (
    <S.Active>#{title}</S.Active>
  ) : (
    <Link to={`/categories?q=${title}`}>
      <S.Disabled>#{title}</S.Disabled>
    </Link>
  );
};

const CategoryList = ({ selectedCategory, categories }: CategoryListProps) => {
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
