import React, { useState, useEffect, useRef } from "react";

import useResize from "../../hooks/useResize";
import useScroll from "../../hooks/useScroll";
import getElementOffsetY from "../../utils/getOffset";

// CSS
import * as S from "./style";

const SelectedCategory = ({ category }) => {
  const { name } = category;
  return <S.Active>{name}</S.Active>;
};

const Category = ({ category, selectCategory }) => {
  const { name, slug } = category;

  return (
    <S.Disabled
      onClick={() => {
        selectCategory(slug);
      }}
    >
      {name}
    </S.Disabled>
  );
};

const Categories = ({ categories, category, selectCategory }) => {
  const [activeSide, setActiveSide] = useState(false);
  const [SideWrapperTop, setSideWrapperTop] = useState();
  const scrollY = useScroll();
  const width = useResize();
  const ref = useRef();

  // store 'top' of side wrapper
  useEffect(() => {
    if (ref.current) {
      setSideWrapperTop(getElementOffsetY(ref.current));
    }
  }, []);

  // toggle side wrapper
  useEffect(() => {
    setActiveSide(width <= 1300);
    return;
  }, [width]);

  const CategoryItems = () => (
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
  );

  return activeSide ? (
    <CategoryItems />
  ) : (
    <S.SideWrapper ref={ref} isSticky={scrollY > SideWrapperTop - 120}>
      <div>
        <CategoryItems />
      </div>
    </S.SideWrapper>
  );
};

export default Categories;
