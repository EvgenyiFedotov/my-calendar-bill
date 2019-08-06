import styled from 'styled-components';

import { Column } from 'components/core/styled/FlexBlock';

export default styled(Column)`
  overflow-x: hidden;
  overflow-y: auto;
  flex: 1;
  padding: calc(var(--space) * 2) 10vw calc(var(--space) * 2) 0;
  height: 100%;

  @media (max-width: 1023px) {
    padding: calc(var(--space) * 2);
  }

  @media (max-width: 767px) {
    align-items: center;
  }
`;
