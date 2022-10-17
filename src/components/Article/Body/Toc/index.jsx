import React, { useState, useEffect, useRef } from "react";
import { animateScroll } from "react-scroll";

import getElementOffsetY from "../../../../utils/getOffset";
import useScroll from "../../../../hooks/useScroll";

// CSS
import * as S from "./style";

const Toc = ({ lists }) => {
  const [topHeadings, setTopHeadings] = useState([]);
  const [topToc, setTopToc] = useState();
  const [isActive, setIsActive] = useState(0);
  const ref = useRef();
  const { scrollY, setScrollY } = useScroll(onScroll);
  const len = lists.length;

  function onScroll() {
    setScrollY(window.scrollY);
  }

  useEffect(() => {
    setTopHeadings(
      [
        ...document.querySelectorAll(
          "#post-contents > h1, #post-contents > h2, #post-contents > h3"
        ),
      ].map((element) => getElementOffsetY(element))
    );
  }, []);

  useEffect(() => {
    if (ref.current) {
      setTopToc(getElementOffsetY(ref.current));
    }
  }, []);

  useEffect(() => {
    topHeadings.forEach((heading, idx) => {
      if (scrollY > heading - 100) setIsActive(idx);
      return;
    });
  }, [scrollY]);

  const clickTitleHandler = (idx) => {
    animateScroll.scrollTo(topHeadings[idx] - 60);
  };

  return (
    <S.TocWrapper ref={ref} isSticky={scrollY > topToc - 100}>
      {len !== 0 ? (
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
      ) : null}
    </S.TocWrapper>
  );
};

export default Toc;
