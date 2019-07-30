import styled, { css } from 'styled-components';

import { RowCss } from 'components/core/styled/Row';
import { ColumnCss } from 'components/core/styled/Column';

export const side = (value = 1) => `var(--space) * 3 * ${value}`;

/**
 * @param {number} value
 */
export const sideCalc = (value = 1) => `calc(${side(value)})`;

export const BlockCssWidth = css`
  width: ${({ width }) => sideCalc(width)};
`;

export const BlockCssHeight = css`
  height: ${({ height }) => sideCalc(height)};
`;

export const BlockRow = styled.div`
  align-items: center;
  ${RowCss};
  ${BlockCssHeight};
`;

export const BlockColumn = styled.div`
  align-items: center;
  ${ColumnCss};
  ${BlockCssWidth};
`;

export default styled.div`
  ${BlockCssWidth};
  ${BlockCssHeight};
`;
