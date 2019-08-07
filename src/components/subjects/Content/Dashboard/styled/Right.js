import styled from 'styled-components';

import { Column } from 'components/core/styled/Flex';

export default styled(Column)`
  overflow-x: hidden;
  overflow-y: auto;
  flex: 1;
  padding-right: 10vw;
  height: 100%;

  @media (max-width: 1023px) {
    padding: calc(var(--space) * 2);
  }

  @media (max-width: 767px) {
    align-items: center;
  }
`;
