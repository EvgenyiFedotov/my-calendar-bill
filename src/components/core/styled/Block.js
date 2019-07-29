import styled, { css } from 'styled-components';

import { RowCss } from 'components/core/styled/Row';
import { ColumnCss } from 'components/core/styled/Column';

/**
 * Get side box
 * @param {number} value
 */
export const side = (value = 1) => `calc(var(--space) * 5 * ${value} + (var(--space) * ${value - 1}))`;

export const BlockCss = css`
  width: ${({ width }) => side(width)};
  height: ${({ height }) => side(height)};
`;

export const BlockRow = styled.div`
  ${RowCss};
  ${BlockCss};
`;

export const BlockColumn = styled.div`
  ${ColumnCss};
  ${BlockCss};
`;

export default styled.div`
  ${BlockCss};
`;
