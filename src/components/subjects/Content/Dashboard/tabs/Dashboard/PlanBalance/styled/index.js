import styled from 'styled-components';

import { Column } from 'components/core/styled/Flex';
import { blockCss } from 'components/core/styled/Block';

export default styled(Column)`
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  justify-content: center;
  align-items: center;
  flex: 1;
  ${blockCss({ heightStep: 3, minHeightStep: 3 })};
`;