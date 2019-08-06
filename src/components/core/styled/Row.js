import styled, { css } from 'styled-components';

// Get justify content
export const justifyContent = (defaultValue = '') => ({ justifyContent }) => (justifyContent || defaultValue ? `justify-content: ${justifyContent || defaultValue}` : '');

// Get align items
export const alignItems = (defaultValue = '') => ({ alignItems }) => (alignItems || defaultValue ? `align-items: ${alignItems || defaultValue}` : '');

// export const marginRight = ({ step = 1 }) => `margin-right: calc(var(--space) * ${step});`;

export const RowCss = css`
  display: flex;
  ${justifyContent()};
  ${alignItems()};
`;

export default styled.div`
  ${RowCss};
`;
