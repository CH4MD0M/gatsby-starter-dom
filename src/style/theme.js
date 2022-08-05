import { keyframes } from "styled-components";

// Animation
const logoAnimation = keyframes`
  0%,
  10%,
  18%,
  20%,
  50.1%,
  60%,
  65.1%,
  80%,
  90.1%,
  92% {
    color: #0e3742;
    box-shadow: none;
  }
  18.1%,
  20.1%,
  50%,
  60.1%,
  65%,
  80.1%,
  90%,
  100% {
    color: #fff;
    text-shadow: 0 0 10px #2196f3, 0 0 20px #2196f3, 0 0 40px #2196f3,
      0 0 80px #2196f3, 0 0 160px #2196f3;
  }`;

const variables = {
  colors: {
    background: "hsl(209, 28%, 20%)",
    primary1: "hsl(209, 28%, 20%)",
    primary2: "hsl(209, 30%, 30%)",
    primary3: "hsl(209, 28%, 39%)",
    primary4: "hsl(210, 22%, 49%)",
    primary5: "hsl(210, 31%, 80%)",
    black: "#0a0c10",
    white: "hsl(206, 33%, 96%)",
    darkWhite: "hsl(212, 33%, 89%)",
    darkGreen: "hsl(125, 67%, 35%)",
    lightGreen: "hsl(134, 41%, 88%)",
    darkRed: "hsl(360, 67%, 44%)",
    lightRed: "hsl(360, 71%, 66%)",
    lightOrange: "hsl(29, 74%, 92%)",
  },
  sizes: {
    // bioWidth:"230px",
    maxWidth: "1000px",
  },
  sideSpace: {
    small: "2rem",
    large: "4rem",
    contentSmall: "2rem",
    contentLarge: "2.5rem",
  },
  responsive: {
    small: "500px",
    medium: "768px",
    large: "950px",
  },
  effect: {
    radius: "10px",
    lightShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
    darkShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
  },
  text: {
    spacing: "0.2rem",
  },
  animation: {
    logoAnimation,
    transition: "all 0.2s linear",
  },
};
export default variables;
