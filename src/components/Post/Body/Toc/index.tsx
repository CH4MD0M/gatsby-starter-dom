import React, { useState, useCallback, useEffect } from 'react';
import { animateScroll } from 'react-scroll';

import getElementOffsetY from '@utils/getOffset';

// CSS
import * as S from './style';

const Toc = () => {
  const [headings, setHeadings] = useState([]);
  const [activeHeadingId, setActiveHeadingId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const visibleHeadings = entries
          .filter(entry => entry.isIntersecting)
          .map(entry => entry.target);

        if (visibleHeadings.length > 0) {
          setActiveHeadingId(visibleHeadings[0].id);
        }
      },
      {
        rootMargin: '-60px 0px -80% 0px',
      },
    );

    const headingElements = document.querySelectorAll(
      '#post-contents > h1, #post-contents > h2, #post-contents > h3',
    );

    setHeadings(Array.from(headingElements));

    headingElements.forEach(heading => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, []);

  // active First Heading at first render
  useEffect(() => {
    if (headings.length > 0) {
      setActiveHeadingId(headings[0].id);
    }
  }, [headings]);

  // TOC-Item Click Handler
  const handleClickHeading = useCallback((itemId: string) => {
    const node = document.getElementById(itemId);
    animateScroll.scrollTo(getElementOffsetY(node) - 60);
  }, []);

  return (
    <S.TocWrapper>
      {headings.map((item, idx) => (
        <S.TocItem
          key={idx}
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
