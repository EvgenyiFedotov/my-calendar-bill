import styled from 'styled-components';

import Column from 'components/core/styled/Column';

export default styled(Column)`
  margin: 0 auto;
  padding: 0 calc(var(--space) * 2);
  width: 100%;
  max-width: calc(var(--space) * 90 - (var(--space) * 4));
`;
