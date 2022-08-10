import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Wrapper } from "./style";

const Bio = ({ author, date }) => {
  return (
    <Wrapper>
      <div className="bio-image">
        <StaticImage
          src="../../assets/banner-about.jpg"
          alt="author"
          class="author-image"
        />
      </div>
      <div className="bio-content">
        <span className="author-name">{author}</span>
        <span className="date">{date}</span>
      </div>
    </Wrapper>
  );
};

export default Bio;
