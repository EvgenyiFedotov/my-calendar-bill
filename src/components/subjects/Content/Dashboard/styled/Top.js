import styled, { css } from 'styled-components';

import { Row } from 'components/core/styled/FlexBlock';
import { sideCalc } from 'components/core/styled/Block';

export const height = sideCalc(2);

const styleByMode = ({ mode = 'default' }) => mode === 'default'
  && css`
    @media (max-width: 1023px) {
      display: flex;
      padding: calc(var(--space) * 2);
    }
  `;

export default styled(Row)`
  width: 100%;
  height: ${height};
  box-shadow: var(--box-shadow);
  background-color: var(--bg-color);
  align-items: center;
  justify-content: space-between;
  padding: 0 10vw;
  z-index: 1;
  display: none;
  ${styleByMode};
`;
