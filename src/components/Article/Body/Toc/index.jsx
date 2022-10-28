import React, { useState, useCallback, useEffect } from "react";
import { animateScroll } from "react-scroll";

import getElementOffsetY from "../../../../utils/getOffset";
import useScroll from "../../../../hooks/useScroll";

// CSS
import * as S from "./style";

const Toc = ({ lists }) => {
  const [tocWrapperTop, setTocWrapperTop] = useState();
  const [headingsTop, setHeadingsTop] = useState([]);
  const [isActive, setIsActive] = useState(0);
  const scrollY = useScroll();

  // store 'top' of toc wrapper
  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setTocWrapperTop(getElementOffsetY(node));
    }
  });

  // store 'top' of Each toc item
  useEffect(() => {
    setHeadingsTop(
      [
        ...document.querySelectorAll(
          "#post-contents > h1, #post-contents > h2, #post-contents > h3"
        ),
      ].map((element) => getElementOffsetY(element))
    );
  }, []);

  // active toc item
  useEffect(() => {
    headingsTop.forEach((heading, idx) => {
      if (scrollY > heading - 100) setIsActive(idx);
      return;
    });
  }, [scrollY]);

  // toc click handler
  const clickTitleHandler = (idx) => {
    animateScroll.scrollTo(headingsTop[idx] - 100);
  };

  return (
    <>
      {lists.length ? (
        <S.TocWrapper
          ref={measuredRef}
          isSticky={scrollY > tocWrapperTop - 120}
        >
          <div>
            {lists.map((item, idx) => (
              <S.TocItem
                key={idx}
                active={idx === isActive}
                ml={
                  item.tagName === "H1"
                    ? "0"
                    : item.tagName === "H2"
                    ? "1.2rem"
                    : "2.2rem"
                }
                onClick={() => clickTitleHandler(idx)}
              >
                {item.innerText}
              </S.TocItem>
            ))}
          </div>
        </S.TocWrapper>
      ) : null}
    </>
  );
};

export default Toc;
