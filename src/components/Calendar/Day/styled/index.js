import styled from 'styled-components';

import Box, { backgroundColor as backgroundColorBox } from '../../../styled/Box';
import shadowHover from '../../../styled/shadow-hover';

// Get background color hover
export const color = ({ disabled, holiday }) => {
  if (holiday) {
    return disabled ? 'var(--red-dk-color)' : 'var(--red-color)';
  }
  return backgroundColorBox({ disabled });
};

export const backgroundColor = ({ selected }) => (selected ? 'var(--main-lg-color)' : undefined);

/**
 * Styled component `Day`
 * @param {boolean} disabled
 * @param {boolean} holiday
 * @param {boolean} selected
 */
export default styled(Box)`
  position: relative;
  color: ${color};
  background-color: ${backgroundColor};
  ${shadowHover};
`;
