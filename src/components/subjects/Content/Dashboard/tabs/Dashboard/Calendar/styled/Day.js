import styled from 'styled-components';

import Block, { sideCalc } from 'components/core/styled/Block';

const color = ({ color = 'var(--text-color)' }) => `color: ${color}`;

export default styled(Block)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius);
  width: ${sideCalc(1.5)};
  min-width: ${sideCalc(1.5)};
  height: ${sideCalc(1.5)};
  min-height: ${sideCalc(1.5)};
  cursor: pointer;
  position: relative;
  ${color};
`;
