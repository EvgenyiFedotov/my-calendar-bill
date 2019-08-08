import styled from 'styled-components';

import { rowCss, columnCss } from 'components/core/styled/Flex';

export default styled.div`
  flex-wrap: wrap;
  ${rowCss({ step: 2 })};

  @media (max-width: 767px) {
    ${columnCss({ step: 2 })};
    align-items: center;

    & > * {
      min-width: 100%;
      align-items: center;
    }
  }
`;
