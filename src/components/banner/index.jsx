import React from "react";
import About from "./About";
import BannerCategories from "./banner-categories";
// import Recent from "./Recent";
import styled from "styled-components";
import "./style.scss";

const Banner = () => {
  return (
    <Wrapper>
      <About />
      {/* <Recent /> */}
      <BannerCategories />
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.aside`
  position: sticky;
  top: 3rem;
  display: grid;
  grid-template-columns: 200px;
  justify-content: center;
  row-gap: 1rem;
`;
