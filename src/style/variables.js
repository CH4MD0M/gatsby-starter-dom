import { keyframes } from "styled-components";

export const logoAnimation = keyframes`
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
    color: hsl(206, 33%, 96%);
    text-shadow: 0 0 15px #2196f3, 0 0 25px #2196f3, 0 0 40px #2196f3,
      0 0 80px #2196f3, 0 0 160px #2196f3;
  }`;

export const commonColor = {
  darkGreen: "hsl(125, 67%, 35%)",
  lightGreen: "hsl(134, 41%, 88%)",
  darkRed: "hsl(360, 67%, 44%)",
  lightRed: "hsl(360, 71%, 66%)",
  lightOrange: "hsl(29, 74%, 92%)",
};

export const commonVariables = {
  sizes: {
    maxWidth: "1100px",
  },
  sideSpace: {
    large: "2rem",
    small: "1rem",
    contentLarge: "4rem",
    contentSmall: "2rem",
  },
  responsive: {
    small: "500px",
    medium: "768px",
    large: "950px",
  },
  effect: {
    radius: "10px",
    shadow: "6px 7px 13px 0px rgba(0,0,0,0.57)",
  },
};
