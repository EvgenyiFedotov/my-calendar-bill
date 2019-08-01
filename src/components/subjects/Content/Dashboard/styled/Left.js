import styled from 'styled-components';

import Column from 'components/core/styled/Column';
import { sideCalc } from 'components/core/styled/Block';

export const width = sideCalc(10);

export default styled(Column)`
  padding: calc(var(--space) * 2) 0 calc(var(--space) * 2) 10vw;

  @media (max-width: 1023px) {
    display: none;
  }
`;
