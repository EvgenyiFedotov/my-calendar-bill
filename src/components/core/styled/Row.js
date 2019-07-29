import styled from 'styled-components';

// Get justify content
export const justifyContent = (defaultValue = '') => ({ justifyContent }) => (justifyContent || defaultValue ? `justify-content: ${justifyContent || defaultValue}` : '');

// Get align items
export const alignItems = (defaultValue = '') => ({ alignItems }) => (alignItems || defaultValue ? `align-items: ${alignItems || defaultValue}` : '');

export const marginRight = ({ step = 1 }) => `margin-right: calc(var(--space) * ${step});`;

export default styled.div`
  display: flex;
  ${justifyContent()};
  ${alignItems()};

  & > :not(:last-child) {
    ${marginRight};
  }
`;
