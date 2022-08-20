import { FaWeight } from "react-icons/fa";
import { logoAnimation, commonColor, commonVariables } from "./variables";

export const darkTheme = {
  colors: {
    background: "	hsl(218, 27%, 14%)",
    textColor: "hsl(206, 33%, 96%)",
    contentBgColor: "	hsl(219, 22%, 23%)",
    contentTextColor: "hsl(0, 20%, 100%)",
    headingColor: "hsl(210, 27%, 90%)",
    linkColor: "#2196f3",
    categoryBorderColor: "hsl(210, 22%, 49%)",
    postsBorderColor: "hsl(219, 22%, 23%)",

    textShadow: "0 0 10px #2196f3, 0 0 40px #2196f3;",
    boxShadow: "0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3",
    smallBoxShadow: "0 0 5px #2196f3, 0 0 10px #2196f3",

    primary1: "hsl(209, 28%, 20%)",
    primary2: "hsl(209, 30%, 30%)",
    primary3: "hsl(209, 28%, 39%)",
    primary4: "hsl(210, 22%, 49%)",
    primary5: "hsl(210, 31%, 80%)",
    primary6: "hsl(210, 27%, 90%)",

    ...commonColor,
  },
  text: {
    spacing: "0.2rem",
    regularFontWeight: "100",
    boldFontWeight: "400",
  },
  animation: {
    logoAnimation,
    transition: "all 0.2s linear",
  },
  ...commonVariables,
};

export const lightTheme = {
  colors: {
    background: "hsl(0, 0%, 95%)",
    textColor: "hsl(219, 22%, 23%)",
    contentBgColor: "hsl(0, 0%, 100%)",
    contentTextColor: "hsl(218, 17%, 35%)",
    headingColor: "hsl(219, 22%, 23%)",
    linkColor: "hsl(210, 31%, 80%)",
    categoryBorderColor: "hsl(210, 31%, 80%)",
    postsBorderColor: "hsl(210, 31%, 87%)",

    primary1: "hsl(209, 28%, 20%)",
    primary2: "hsl(209, 30%, 30%)",
    primary3: "hsl(209, 28%, 39%)",
    primary4: "hsl(210, 22%, 49%)",
    primary5: "hsl(210, 31%, 80%)",
    primary6: "hsl(210, 27%, 90%)",

    ...commonColor,
  },
  text: {
    spacing: "0.2rem",
    regularFontWeight: "400",
    boldFontWeight: "500",
  },
  ...commonVariables,
};
