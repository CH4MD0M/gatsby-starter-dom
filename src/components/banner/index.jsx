import React from "react";
import About from "./About";
import BannerCategories from "./banner-categories";
// import Recent from "./Recent";
import styled from "styled-components";
import "./style.scss";

const Banner = () => {
  return (
    <Wrapper>
      <BannerCategories />
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.aside`
  margin-left: 2rem;
  position: -webkit-sticky;
  position: sticky;
  top: 20%;
  min-height: 200px;
  height: 25vh;
`;
