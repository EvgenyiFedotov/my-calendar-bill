import styled from 'styled-components';

import { sideCalc } from 'components/core/styled/Block';

export const color = ({ color = 'var(--text-color)' }) => color;

export default styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: calc(var(--space) * 2);
  height: ${sideCalc(1.5)};
  border-radius: var(--border-radius);
  padding: 0 calc(var(--space) * 2);
  color: #ffffff;
  background-color: ${color};
`;
