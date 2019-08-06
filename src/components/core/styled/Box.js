import styled, { css } from 'styled-components';

import Column from 'components/core/styled/Column';

const padding = ({ paddingSpaceStep = [1, 1] }) => css`
  padding: ${`calc(var(--space) * ${paddingSpaceStep[0]}) calc(var(--space) * ${
    paddingSpaceStep[1]
  })`};
`;

export default styled(Column)`
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  margin: var(--space);
  ${padding};
`;
