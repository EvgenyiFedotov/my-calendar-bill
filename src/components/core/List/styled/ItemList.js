import styled from 'styled-components';

import Box from '../../styled/Box';
import shadowHover from '../../styled/shadow-hover';
import { justifyContent, alignItems } from '../../styled/Row';

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
