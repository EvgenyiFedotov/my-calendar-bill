import styled from 'styled-components';

import { justifyContent, alignItems } from './Row';

export default styled.div`
  display: flex;
  flex-direction: column;
  ${justifyContent()};
  ${alignItems()};

  & > :not(:last-child) {
    flex: none;
    margin-bottom: var(--space);
  }
`;
