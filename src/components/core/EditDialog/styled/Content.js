import styled from 'styled-components';

import Column from 'components/core/styled/Column';

export default styled(Column)`
  height: 100%;
  flex: 1 !important;
  overflow-x: hidden;
  overflow-y: auto;
  padding: calc(var(--space) * 0.5) 0;
`;
