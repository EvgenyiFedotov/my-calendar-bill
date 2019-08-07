import { createGlobalStyle, css } from 'styled-components';

const palette = {
  dark: css`
    --bg-color: #282c34;
    --bg-area-color: #303541;
    --main-color: #0088fe;
    --text-color: #ffffff;
    --text-second-color: #9e9e9e;
    --text-disabled-color: #414a5d;
    --success-color: #00c49f;
    --error-color: #f44336;
  `,
  white: css`
    --bg-color: #ffffff;
    --bg-area-color: #fafafa;
    --main-color: #0088fe;
    --text-color: #282c34;
    --text-second-color: #9e9e9e;
    --text-disabled-color: #e0e0e0;
    --success-color: #00c49f;
    --error-color: #f44336;
  `,
};

export default createGlobalStyle`
  :root {
    --space: 8px;
    --border-radius: calc(var(--space) * 0.5);
    --box-shadow: 0px 2px 6px 0 hsla(0, 0%, 0%, 0.2);

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
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  body {
    font-size: calc(var(--space) * 2);
    color: var(--text-color);
    background-color: var(--bg-color);
  }
`;
