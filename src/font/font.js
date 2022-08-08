import { createGlobalStyle } from "styled-components";
import Cactron from "./Cactron-Regular.otf";
// import Tones from "./Tones.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: "Cactron";
        src: url(${Cactron});
    }
`;
