import styled from 'styled-components';

import { Column } from 'components/core/styled/FlexBlock';

export default styled(Column)`
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-width: calc(var(--space) * 38);
  max-width: 100%;
`;
