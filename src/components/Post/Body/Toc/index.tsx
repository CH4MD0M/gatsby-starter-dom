import React, { useCallback } from 'react';
import { animateScroll } from 'react-scroll';

import { useHeadObserver } from '@hooks/useHeadObserver';
import getElementOffsetY from '@utils/getOffset';
import TocItem from './TocItem';

// CSS
import * as S from './style';

const Toc = () => {
  const { headings, activeHeadingId } = useHeadObserver();

  // TOC-Item Click Handler
  const handleClickHeading = useCallback((itemId: string) => {
    const node = document.getElementById(itemId);
    animateScroll.scrollTo(getElementOffsetY(node) - 60);
  }, []);

  return (
    <S.TocWrapper>
      {headings.map(({ element, id }) => (
        <TocItem
          key={id}
          id={id}
          tagName={element?.tagName}
          isActive={id === activeHeadingId}
          onClick={handleClickHeading}
        >
          {element?.innerText}
        </TocItem>
      ))}
    </S.TocWrapper>
  );
};

export default Toc;
