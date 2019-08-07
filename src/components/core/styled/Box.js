import styled, { css } from 'styled-components';

import { Column } from 'components/core/styled/Flex';
import { blockCss } from 'components/core/styled/Block';

const padding = ({ paddingSpaceStep = [1, 1] }) => css`
  padding: ${`calc(var(--space) * ${paddingSpaceStep[0]}) calc(var(--space) * ${
    paddingSpaceStep[1]
  })`};
`;

export const boxCss = () => css`
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  ${blockCss};
  ${padding};
`;

export default styled(Column)`
  ${boxCss};
`;
