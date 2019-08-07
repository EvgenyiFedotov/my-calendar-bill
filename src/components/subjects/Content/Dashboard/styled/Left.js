import styled, { css } from 'styled-components';

import { Column } from 'components/core/styled/Flex';
import { sideCalc } from 'components/core/styled/Block';

export const width = sideCalc(10);

const styleByMode = ({ mode = 'default' }) => mode === 'default'
  && css`
    @media (max-width: 1023px) {
      display: none;
    }
  `;

export default styled(Column)`
  padding-left: 10vw;
  justify-content: center;
  ${styleByMode};
`;
