import styled, { css } from 'styled-components';

import Column from 'components/core/styled/Column';
import { sideCalc } from 'components/core/styled/BlockOLD';

export const width = sideCalc(10);

const styleByMode = ({ mode = 'default' }) => mode === 'default'
  && css`
    @media (max-width: 1023px) {
      display: none;
    }
  `;

export default styled(Column)`
  padding: calc(var(--space) * 2) 0 calc(var(--space) * 2) 10vw;
  ${styleByMode};
`;
