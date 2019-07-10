import styled from 'styled-components';

import Column from '../../../../styled/Column';
import { side } from '../../../../styled/Box';

export default styled(Column)`
  justify-content: center;
  width: ${side(8)};
  max-width: 100%;
  padding: calc(var(--space) * 2);
`;
