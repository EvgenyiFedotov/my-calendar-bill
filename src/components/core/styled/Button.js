import styled, { css } from 'styled-components';

import { sideCalc } from 'components/core/styled/Block';

export const color = ({ color = 'var(--text-color)' }) => css`
  border-color: ${color};
  color: ${color};
`;

export default styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: calc(var(--space) * 2);
  height: ${sideCalc()};
  border-radius: var(--border-radius);
  padding: 0 calc(var(--space) * 2);
  border: 1px solid;
  ${color};
`;
