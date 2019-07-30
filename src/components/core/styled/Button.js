import styled from 'styled-components';

import { sideCalc } from 'components/core/styled/Block';

// Get color
export const color = ({ color = 'var(--main-color)' }) => `color: ${color}`;

export default styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: calc(var(--space) * 2);
  ${color};
  height: ${sideCalc()};

  &:hover {
    text-decoration: underline;
  }
`;
