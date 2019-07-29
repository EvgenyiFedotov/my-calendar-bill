import styled from 'styled-components';

import { justifyContent, alignItems } from './Row';

export const marginBottom = ({ step = 1 }) => `margin-bottom: calc(var(--space) * ${step});`;

export default styled.div`
  display: flex;
  flex-direction: column;
  ${justifyContent()};
  ${alignItems()};

  & > :not(:last-child) {
    flex: none;
    ${marginBottom};
  }
`;
