import styled from 'styled-components';

import Column from 'components/core/styled/Column';
import { side } from 'components/core/styled/Box';

export default styled(Column)`
  padding: calc(var(--space) * 2);
  width: ${side(10)};
`;
