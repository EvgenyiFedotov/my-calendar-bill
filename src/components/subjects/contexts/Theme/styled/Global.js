import { createGlobalStyle, css } from 'styled-components';

const whiteTheme = css`
  --bg-color: #ffffff;
  --bg-lg-color: #f5f5f5;
  --green-color: #26a69a;
  --red-color: #ef5350;
`;

export default createGlobalStyle`
  :root {
    --bg-color: #282c34;
    --bg-lg-color: #32394c;
    --main-color: #426cbf;
    --main-lg-color: #5d87d6;
    --main-dk-color: #47597d;
    --red-color: #d32f2f;
    --red-dk-color: #6f3332;
    --green-color: #00695C;
    --gray-color: #999999;

    --space: 9px;

    --border-radius: calc(var(--space) * 0.5);

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
