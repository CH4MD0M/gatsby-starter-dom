import React, { useCallback } from 'react';
import { animateScroll } from 'react-scroll';

import { useHeadObserver } from '@hooks/useHeadObserver';
import getElementOffsetY from '@utils/getOffset';

// CSS
import * as S from './style';

const Toc = () => {
  const { headings, activeHeadingId } = useHeadObserver();

  // TOC-Item Click Handler
  const handleClickHeading = useCallback((itemId: string) => {
    const node = document.getElementById(itemId) as HTMLElement;
    animateScroll.scrollTo(getElementOffsetY(node) - 60);
  }, []);

  return (
    <S.TocWrapper>
      {headings.map(item => (
        <S.TocItem
          key={item.id}
          active={item.id === activeHeadingId}
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
