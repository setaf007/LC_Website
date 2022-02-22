import { createGlobalStyle } from "styled-components";
import pearlWhiteWOFF from "./Pearl_White.woff";

export default createGlobalStyle`
    @font-face {
        font-family: 'LLPearlWhite';
        src: local('Pearl_White'),
        url(${pearlWhiteWOFF}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;