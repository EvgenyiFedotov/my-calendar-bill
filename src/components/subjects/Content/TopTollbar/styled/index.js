import styled from 'styled-components';

import Row from 'components/core/styled/Row';
import { side } from 'components/core/styled/Box';
import { shadow } from 'components/core/styled/shadow-hover';

export default styled(Row)`
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-color);
  color: var(--bg-color);
  padding: var(--space);
  height: ${side()}px;
  ${shadow};
`;
