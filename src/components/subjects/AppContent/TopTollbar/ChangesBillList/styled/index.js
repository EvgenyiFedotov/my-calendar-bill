import styled from 'styled-components';

import Column from '../../../../../core/styled/Column';
import { side } from '../../../../../core/styled/Box';

export default styled(Column)`
  padding: calc(var(--space) * 2);
  width: ${side(10)};
`;
