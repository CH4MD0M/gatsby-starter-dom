import React, { useState, useCallback } from 'react';
import { animateScroll } from 'react-scroll';

import getElementOffsetY from '../../../../utils/getOffset';
import useScroll from '../../../../hooks/useScroll';

// CSS
import * as S from './style';

const Toc = () => {
  const [tocWrapperTop, setTocWrapperTop] = useState();
  const [currentId, setCurrentId] = useState();
  const [headings, setHeading] = useState([]);
  const scrollY = useScroll();

  const handleClickHeading = useCallback(itemId => {
    const node = document.getElementById(itemId);
    animateScroll.scrollTo(getElementOffsetY(node) - 100);
  }, []);

  return (
    <S.TocWrapper isSticky={scrollY > tocWrapperTop - 100}>
      <div>
        {headings.map((item, idx) => (
          <S.TocItem
            key={idx}
            active={item.id === currentId}
            ml={
              item.tagName === 'H1'
                ? '0'
                : item.tagName === 'H2'
                ? '1.2rem'
                : '2.2rem'
            }
            onClick={() => handleClickHeading(item.id)}
          >
            {item.innerText}
          </S.TocItem>
        ))}
      </div>
    </S.TocWrapper>
  );
};

export default Toc;
