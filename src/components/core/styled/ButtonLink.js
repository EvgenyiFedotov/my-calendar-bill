import styled from 'styled-components';

import { blockCss } from 'components/core/styled/Block';

// Get color
export const color = ({ color = 'var(--text-color)' }) => `color: ${color}`;

export default styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: calc(var(--space) * 2);
  ${color};
  ${blockCss({ minHeightStep: 1 })};

  &:hover {
    text-decoration: underline;
  }
`;
