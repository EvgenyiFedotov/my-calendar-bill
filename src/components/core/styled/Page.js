import styled from 'styled-components';

import Column from 'components/core/styled/Column';

export const Content = styled(Column)`
  padding: 0 calc(var(--space) * 2);
  width: 100%;
  max-width: calc(var(--space) * 90 - (var(--space) * 4));
`;

export default styled(Column)`
  height: 100vh;
  overflow-y: auto;
  align-items: center;
`;
