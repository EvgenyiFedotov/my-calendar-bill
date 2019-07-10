import { createGlobalStyle, css } from 'styled-components';

const whiteTheme = css`
  --bg-color: white;
  --bg-lg-color: #fafafa;
  --green-color: #26a69a;
`;

export default createGlobalStyle`
  :root {
    --bg-color: #282c34;
    --bg-lg-color: #2a2e38;
    --main-color: #426cbf;
    --main-lg-color: #5d87d6;
    --main-dk-color: #47597d;
    --red-color: #ef5350;
    --red-dk-color: #6f3332;
    --green-color: #00695C;
    --gray-color: #999999;

    --space: 8px;

    ${({ theme }) => theme === 'white' && whiteTheme}
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  html, body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  body {
    font-size: calc(var(--space) * 2);
    color: var(--main-color);
  }
`;
