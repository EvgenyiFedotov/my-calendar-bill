import styled, { css } from 'styled-components';

import Column from 'components/core/styled/Column';
import { blockCss } from 'components/core/styled/Block';

const padding = ({ paddingSpaceStep = [1, 1] }) => css`
  padding: ${`calc(var(--space) * ${paddingSpaceStep[0]}) calc(var(--space) * ${
    paddingSpaceStep[1]
  })`};
`;

export default styled(Column)`
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  ${blockCss};
  ${padding};
`;