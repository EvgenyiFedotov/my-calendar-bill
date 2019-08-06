import styled, { css } from 'styled-components';

import { justifyContent, alignItems } from './Row';

// export const marginBottom = ({ step = 1 }) => `margin-bottom: calc(var(--space) * ${step});`;

export const ColumnCss = css`
  display: flex;
  flex-direction: column;
  ${justifyContent()};
  ${alignItems()};
`;

export default styled.div`
  ${ColumnCss};
`;
