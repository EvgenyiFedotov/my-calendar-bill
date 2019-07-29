import styled from 'styled-components';

import { side } from 'components/core/styled/Block';

// Get color
export const color = ({ color = 'var(--main-color)' }) => `color: ${color}`;

export default styled.button`
  padding: 0 var(--space);
  background: none;
  border: none;
  cursor: pointer;
  font-size: calc(var(--space) * 2);
  ${color};
  height: ${side()};

  &:hover {
    text-decoration: underline;
  }
`;
