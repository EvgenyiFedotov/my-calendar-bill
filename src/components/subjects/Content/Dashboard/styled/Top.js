import styled from 'styled-components';

import Row from 'components/core/styled/Row';
import { sideCalc } from 'components/core/styled/Block';

export const height = sideCalc(2);

export default styled(Row)`
  width: 100%;
  height: ${height};
  box-shadow: var(--box-shadow);
  background-color: var(--bg-color);
  align-items: center;
  padding: 0 10vw;
  justify-content: space-between;

  @media (max-width: 1023px) {
    padding: calc(var(--space) * 2);
  }
`;
