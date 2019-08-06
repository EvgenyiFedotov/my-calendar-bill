import styled from 'styled-components';

import { blockCss } from 'components/core/styled/Block';
import { Row } from 'components/core/styled/FlexBlock';

export default styled(Row)`
  background-color: var(--bg-area-color);
  padding: var(--space);
  border-radius: var(--border-radius);
  cursor: pointer;
  ${blockCss({ heightStep: 1, minHeightStep: 1 })};
`;
