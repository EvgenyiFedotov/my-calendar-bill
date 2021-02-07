import { css } from 'styled-components';

export const shadow = css`
  box-shadow: 0px 2px 6px 0 hsla(0, 0%, 0%, 0.2);
`;

/**
 * Styled component `ShadowHover`
 */
export default css`
  transition: box-shadow 0.25s ease-out;

  &:hover {
    ${shadow};
    /* transform: scale(1.1, 1.1); */
    /* background-color: var(--bg-lg-color); */
  }
`;
