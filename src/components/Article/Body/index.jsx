import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Toc from "./Toc";
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
    <BodyWrapper>
      <Toc lists={toc} />
      <PostMarkdown body={body} />
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  position: relative;
  border-radius: 1rem;
`;

export default Body;
