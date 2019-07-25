import styled from 'styled-components';

import Row from 'components/core/styled/Row';

export default styled(Row)`
  flex-wrap: wrap;
  overflow-y: auto;
  flex: 1;
  padding: 0 calc(var(--space) * 2);
  max-width: calc(var(--space) * 90 - (var(--space) * 4));
`;
