import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaRegClock } from "react-icons/fa";
import { Link } from "gatsby";
import styled from "styled-components";

const Post = ({ excerpt, frontmatter }) => {
  const { title, thumbnail, slug, date, category, author } = frontmatter;

  return (
    <Wrapper>
      <Link to={`/posts/${slug}`} className="post-container">
        <GatsbyImage image={getImage(thumbnail)} alt={title} className="img" />
        <div className="info">
          <header>
            <span className="category">{category}</span>
            <h3>{title}</h3>
            <p>{excerpt}</p>
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

const Wrapper = styled.article`
  margin-bottom: 1rem;
  .post-container {
    background-color: var(--clr-primary-2);
    border-radius: var(--radius);
    transition: var(--transition);
    &:hover {
      transform: translateY(-10px);
    }
  }
  .info {
    text-align: center;
  }
  .img {
    margin-bottom: 2rem;
    border-radius: var(--radius);
    height: 17rem;
  }
  .category {
    display: inline-block;
    margin-bottom: 1rem;
    background: var(--clr-primary-8);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 0.4rem;
    letter-spacing: var(--spacing);
    color: var(--clr-primary-5);
    font-size: 0.875rem;
  }
  h3 {
    color: var(--clr-white);
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
    text-transform: initial;
  }

  p {
    color: var(--clr-primary-6);
    line-height: 1.5;
    font-size: 0.875rem;
  }

  footer {
    padding-top: 1rem;
    border-top: 1px solid var(--clr-primary-6);
    color: var(--clr-primary-6);
  }
  @media (min-width: 600px) {
    .post-container {
      display: flex;
      flex-direction: column;
      padding: 2rem;
    }
    .img {
      height: 20rem;
    }
    header,
    footer {
      text-align: left;
    }
    header p {
      width: 100%;
    }
  }
  @media (min-width: 900px) {
    .post-container {
      padding: 2.5rem;
    }
    .img {
      height: 25rem;
    }
    header p {
      width: 85%;
    }
  }
  @media (min-width: 1100px) {
    .post-container {
      display: grid;
      grid-template-columns: 30rem 1fr;
      column-gap: 1.5rem;
      padding: 1.5rem;
    }
    .info {
      display: grid;
      grid-template-rows: 1fr 50px;
      grid-gap: 1rem;
    }
    .img {
      height: 100%;
      max-height: 20rem;
    }
    .underline {
      margin-left: 0;
      margin-right: 0;
    }
    .date {
      display: flex;
      align-items: center;
      .icon {
        color: var(--clr-primary-8);
        margin-right: 0.5rem;
      }
    }
  }
`;

export default Post;
