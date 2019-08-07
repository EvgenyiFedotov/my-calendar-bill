import styled, { css } from 'styled-components';

import Flex, { Row as RowFlex, Column as ColumnFlex } from 'components/core/styled/Flex';
import { blockCss } from 'components/core/styled/Block';

const children = (childrenProps = {}) => css`
  & > * {
    ${blockCss(childrenProps)};
  }
`;

export const Row = styled(RowFlex)`
  ${children};
`;

export const Column = styled(ColumnFlex)`
  ${children};
`;

export default styled(Flex)`
  ${children};
`;
