import styled from 'styled-components';

import { sideCalc } from 'components/core/styled/BlockOLD';

export default styled.input`
  border: 1px solid var(--text-color);
  border-radius: calc(var(--space) * 0.5);
  background-color: transparent;
  color: var(--text-color);
  padding: var(--space);
  width: 100%;
  height: ${sideCalc()};
  font-size: inherit;

  &::placeholder {
    color: var(--text-color);
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
