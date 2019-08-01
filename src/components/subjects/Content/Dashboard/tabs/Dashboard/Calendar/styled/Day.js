import styled from 'styled-components';

import Block, { sideCalc } from 'components/core/styled/Block';

const color = ({ color = 'var(--text-color)' }) => `color: ${color}`;

export default styled(Block)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  width: ${sideCalc()};
  min-width: ${sideCalc()};
  height: ${sideCalc()};
  min-height: ${sideCalc()};
  cursor: pointer;
  position: relative;
  ${color};
`;
