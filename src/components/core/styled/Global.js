import { createGlobalStyle, css } from 'styled-components';

const palette = {
  dark: css`
    --bg-color: #282c34;
    --main-color: #426cbf;
  `,
  white: css`
    --bg-color: #ffffff;
  `,
};

export default createGlobalStyle`
  :root {
    --space: 9px;
    --border-radius: calc(var(--space) * 0.5);
    ${palette.dark};
    ${({ theme = 'white' }) => palette[theme]};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  body {
    font-size: calc(var(--space) * 2);
    color: var(--main-color);
    background-color: var(--bg-color);
  }
`;
