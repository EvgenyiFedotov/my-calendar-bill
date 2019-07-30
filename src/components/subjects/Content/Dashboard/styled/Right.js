import styled from 'styled-components';

import Column from 'components/core/styled/Column';

export default styled(Column)`
  overflow-x: hidden;
  overflow-y: auto;
  flex: 1;
  padding: calc(var(--space) * 2) 10vw calc(var(--space) * 2) 0;
`;
