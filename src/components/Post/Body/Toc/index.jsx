import React, { useState, useCallback, useEffect } from 'react';
import { animateScroll } from 'react-scroll';

import getElementOffsetY from '../../../../utils/getOffset';
import useIntersectionObserver from '../../../../hooks/useIntersectionObserver';

// CSS
import * as S from './style';

const Toc = () => {
  const [currentId, setCurrentId] = useState();
  const [headings, setHeading] = useState([]);
  useIntersectionObserver(setCurrentId);

  // TOC-Item Click Handler
  const handleClickHeading = useCallback(itemId => {
    const node = document.getElementById(itemId);
    animateScroll.scrollTo(getElementOffsetY(node) - 60);
  }, []);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll(
        '#post-contents > h1, #post-contents > h2, #post-contents > h3',
      ),
    );
    setHeading(headingElements);
  }, []);

  return (
    <S.TocWrapper>
      {headings.map((item, idx) => (
        <S.TocItem
          key={idx}
          active={item.id === currentId}
          ml={
            item.tagName === 'H1'
              ? '0.5rem'
              : item.tagName === 'H2'
              ? '1.2rem'
              : '2.2rem'
          }
          onClick={() => handleClickHeading(item.id)}
        >
          {item.innerText}
        </S.TocItem>
      ))}
    </S.TocWrapper>
  );
};

export default Toc;
