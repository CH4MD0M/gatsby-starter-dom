import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Title from "../Title";

import styled from "styled-components";

const About = () => {
  return (
    <Wrapper>
      <Title title="about me" />
      <StaticImage
        src="../../../assets/banner-about.jpg"
        layout="fixed"
        width={100}
        height={100}
        alt="author"
        className="img"
      />
      <p>
        기억보단 기록을 남기는
        <br /> 프론트엔드 개발자입니다.
      </p>
    </Wrapper>
  );
};

export default About;

export const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--clr-grey-5);
  }
  .img {
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 1400px) {
    display: none;
  }
`;
