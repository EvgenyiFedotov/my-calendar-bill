import styled from 'styled-components';

import { side } from '../../../styled/Box';
import Column from '../../../styled/Column';

export default styled(Column)`
  width: ${side(8)};
  max-width: 100%;
  padding-bottom: var(--space);
`;
