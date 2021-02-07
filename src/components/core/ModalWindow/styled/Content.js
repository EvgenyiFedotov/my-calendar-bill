import styled from 'styled-components';

import { shadow } from 'components/core/styled/shadow-hover';

export default styled.div`
  background-color: var(--bg-color);
  pointer-events: all;
  border-radius: calc(var(--space) * 0.5);
  max-height: 100%;
  max-width: calc(100% - var(--space) * 4);
  max-height: calc(100% - var(--space) * 4);
  display: flex;
  ${shadow};
`;
