import React, { createRef, useEffect } from "react";

// CSS
import { Wrapper } from "./style";

const Comments = () => {
  const commentRef = createRef();

  useEffect(() => {
    const utterances = document.createElement("script");
    const utteracesConfig = {
      src: "https://utteranc.es/client.js",
      repo: "CH4MD0M/ch4md0m.blog",
      theme: "github-light",
      "issue-term": "pathname",
      crossorigin: "anonymous",
      async: true,
    };

    Object.entries(utteracesConfig).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    const isComment = commentRef.current.firstChild;
    if (isComment) commentRef.current.removeChild(isComment);

    commentRef.current.appendChild(utterances);
  }, []);

  return (
    <Wrapper>
      <div className="utterances" ref={commentRef}></div>
    </Wrapper>
  );
};

export default Comments;
