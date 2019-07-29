import styled from 'styled-components';

import { side } from 'components/core/styled/Block';
import Column from 'components/core/styled/Column';

export default styled(Column)`
  background-color: var(--main-color);
  height: ${side(2)};
  width: 100vw;
  color: var(--white-color);
  box-shadow: 0px 2px 6px 0 hsla(0, 0%, 0%, 0.2);
  justify-content: center;
`;
