import styled from 'styled-components';

import Column from 'components/core/styled/Column';

export default styled(Column)`
  overflow-y: auto;
  padding: 0 calc(var(--space) * 2);
  max-width: calc(var(--space) * 90 - (var(--space) * 4));
`;
