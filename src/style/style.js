import { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; // styled-reset 임포트

const GlobalStyle = createGlobalStyle`
  ${reset} /* 기본 Reset 적용 */

  /* 추가적인 글로벌 스타일 */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

  body {
    font-family: 'Pretendard-Regular', sans-serif;
    line-height: 1.5;
    background-color:rgb(188, 243, 206);
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

  h1{
    font-size: 72px;
  }

  button {

    box-sizing: border-box;
    padding: 5px;
    border: 1px solid #333;
    border-radius: 5px;
    
    background-color: #333;
    color: white;
    margin-bottom: 5px;
    font-weight: bold;


    &:hover {
    background-color: red;

    }
  }
`;

export default GlobalStyle;
