import styled, { css } from 'styled-components';

import Box from 'components/core/styled/Box';
import shadowHover from 'components/core/styled/shadow-hover';

// Get background color hover
export const color = ({ otherMonth, holiday, selected }) => {
  if (selected) {
    return css`
      border: 1px solid var(--main-color);
    `;
  }

  if (holiday) {
    return otherMonth
      ? css`
          color: var(--red-dk-color);
        `
      : css`
          color: var(--red-color);
        `;
  }

  if (otherMonth) {
    return css`
      color: var(--main-dk-color);
    `;
  }
};

// export const backgroundColor = ({ selected }) => (selected ? 'var(--main-lg-color)' : undefined);

/**
 * Styled component `Day`
 * @param {boolean} disabled
 * @param {boolean} holiday
 * @param {boolean} selected
 */
export default styled(Box)`
  position: relative;
  ${color};
  ${shadowHover};
`;
