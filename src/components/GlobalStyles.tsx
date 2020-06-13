import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
        color: inherit;
        font-family: 'Noto Sans KR', sans-serif;
    }
    a {
        text-decoration:none;
    }
    html, body {
        width: 100vw;
        height: 100vh;
    }
    body {
        font-size: 12px;
        background-color : rgba(20,20,20,1);
        color: white;
        padding-top: 50px;
    }
`;

export default globalStyles;
