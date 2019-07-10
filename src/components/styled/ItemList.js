import styled from 'styled-components';

import Box from './Box';
import shadowHover from './shadow-hover';
import { justifyContent, alignItems } from './Row';

/**
 * Styled component `Item` (ListBills)
 * @param {number} level
 */
export default styled(Box)`
  width: calc(100% - (var(--space) * 1));
  margin: 0 calc(var(--space) * 0.5);
  padding: var(--space);
  color: var(--main-color);
  ${justifyContent('flex-start')};
  ${alignItems('center')};
  ${shadowHover};
`;
