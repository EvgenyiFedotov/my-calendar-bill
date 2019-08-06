import styled from 'styled-components';

import Block, { sideCalc } from 'components/core/styled/BlockOLD';

const color = ({ color = 'var(--text-color)' }) => `color: ${color}`;

const backgroundColor = ({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`;

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
  ${backgroundColor};
`;
