import styled from 'styled-components';

import Flex, { Row as RowFlex, Column as ColumnFlex } from 'components/core/styled/Flex';
import { blockCss } from 'components/core/styled/Block';

export const Row = styled(RowFlex)`
  & > * {
    ${blockCss};
  }
`;

export const Column = styled(ColumnFlex)`
  & > * {
    ${blockCss};
  }
`;

export default styled(Flex)`
  ${blockCss};
`;
