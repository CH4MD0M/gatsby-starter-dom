import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

// CSS
import { Wrapper } from "./style";
import { FaRegClock } from "react-icons/fa";

const PostPreview = ({ frontmatter }) => {
  const { title, thumbnail, slug, date, category, author } = frontmatter;

  return (
    <Wrapper>
      <Link to={`/posts/${slug}`} className="post-container">
        <GatsbyImage image={getImage(thumbnail)} alt={title} className="img" />
        <div className="info">
          <header>
            <span className="category">{category}</span>
            <h3>{title}</h3>
          </header>
          <footer>
            <span className="date">
              <FaRegClock className="icon" />
              {date}
            </span>
          </footer>
        </div>
      </Link>
    </Wrapper>
  );
};

export default PostPreview;
