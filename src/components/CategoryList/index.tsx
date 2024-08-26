import React from 'react';
import { Link } from 'gatsby';

// CSS
import * as S from './style';

interface CategoryProps {
  title: string;
  count?: number;
  selectedCategory: string;
}

interface CategoryListProps {
  totalCount: number;
  selectedCategory: string;
  categories: { fieldValue: string; totalCount: number }[];
}

const Category = ({ title, count, selectedCategory }: CategoryProps) => {
  return selectedCategory === title ? (
    <S.Active>
      #{title}({count})
    </S.Active>
  ) : (
    <S.Disabled>
      <Link to={`/categories?q=${title}`}>
        #{title}({count})
      </Link>
    </S.Disabled>
  );
};

const CategoryList = ({
  totalCount,
  selectedCategory,
  categories,
}: CategoryListProps) => {
  return (
    <S.FlexWrapper>
      <S.CategoryListWrapper>
        <Category
          title="all"
          count={totalCount}
          selectedCategory={selectedCategory}
        />
        {categories.map((item, idx) => (
          <Category
            key={idx}
            title={item.fieldValue}
            count={item.totalCount}
            selectedCategory={selectedCategory}
          />
        ))}
      </S.CategoryListWrapper>
    </S.FlexWrapper>
  );
};

export default CategoryList;
