import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // styled-reset 임포트

const GlobalStyle = createGlobalStyle`
  ${reset} /* 기본 Reset 적용 */

  /* 추가적인 글로벌 스타일 */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Arial", sans-serif;
    line-height: 1.5;
    background-color: #f8f9fa;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;

export default GlobalStyle;
