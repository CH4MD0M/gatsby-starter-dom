import { keyframes } from "styled-components";

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
    color: hsl(206, 33%, 96%);
    text-shadow: 0 0 15px #2196f3, 0 0 25px #2196f3, 0 0 40px #2196f3;
  }`;

const variables = {
  colors: {
    primary1: "hsl(218, 27%, 14%)",
    primary2: "hsl(219, 22%, 23%)",
    primary3: "hsl(218, 17%, 35%)",
    primary4: "hsl(210, 22%, 49%)",
    primary5: "hsl(210, 31%, 80%)",
    primary6: "hsl(210, 27%, 90%)",
    primary7: "hsl(206,33%, 96%)",
    primary8: "hsl(0, 0%, 98%)",
    primary9: "hsl(0, 0%, 100%)",
    gray1: "hsl(210, 10%, 23%)",
    gray2: "hsl(210, 7%, 56%)",
    gray3: "hsl(210, 11%, 71%)",
    gray4: "hsl(210, 14%, 83%)",
    gray5: "	hsl(210, 16%, 93%)",
    gray6: "hsl(0, 0%, 93%)",
    darkGreen: "hsl(125, 67%, 35%)",
    lightGreen: "hsl(134, 41%, 88%)",
    darkRed: "hsl(360, 67%, 44%)",
    lightRed: "hsl(360, 71%, 66%)",
    lightOrange: "hsl(29, 74%, 92%)",
    neonBlue: "#2196f3",
    boxShadow: "0 0 10px #2196f3, 0 0 15px #2196f3, 0 0 30px #2196f3",
    smallBoxShadow: "0 0 3px #2196f3, 0 0 7px #2196f3",
  },

  sizes: {
    maxWidth: "1000px",
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
  text: {
    spacing: "0.2rem",
    fontWeight1: "100",
    fontWeight2: "200",
    fontWeight3: "400",
    fontWeight4: "500",
  },
  effect: {
    radius: "10px",
    shadow: "2px 2px 8px 0 rgba(0,0,0,0.37)",
  },
  animation: {
    logoAnimation,
    transition: "all 0.2s linear",
  },
};

export default variables;
