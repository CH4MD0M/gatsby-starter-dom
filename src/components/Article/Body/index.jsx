import React, { useState, useEffect } from "react";

import Toc from "./Toc";

// CSS
import * as S from "./style";
import PostMarkdown from "./PostMarkdown";

const Body = ({ body }) => {
  const [toc, setToc] = useState([]);

  useEffect(() => {
    setToc([
      ...document.querySelectorAll(
        "#post-contents > h1, #post-contents > h2, #post-contents > h3"
      ),
    ]);
  }, []);

  return (
    <S.BodyWrapper>
      <Toc lists={toc} />
      <PostMarkdown body={body} />
    </S.BodyWrapper>
  );
};

export default Body;
