import styled from 'styled-components';

import Column from 'components/core/styled/Column';
import { sideCalc } from 'components/core/styled/Block';

export const width = sideCalc(10);

export default styled(Column)`
  background-color: var(--main-color);
`;
