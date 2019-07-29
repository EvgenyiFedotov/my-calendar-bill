import styled, { css } from 'styled-components';

import { RowCss } from 'components/core/styled/Row';
import { ColumnCss } from 'components/core/styled/Column';

/**
 * Get side box
 * @param {number} value
 */
export const side = (value = 1) => `calc(var(--space) * 3 * ${value})`;

export const BlockCssWidth = css`
  width: ${({ width }) => side(width)};
`;

export const BlockCssHeight = css`
  height: ${({ height }) => side(height)};
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
