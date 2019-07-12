import styled, { css } from 'styled-components';

import Day from '../../../../core/Calendar/Day';

const color = ({ prevDate = false }) => (prevDate
  ? css`
        color: var(--gray-color);
      `
  : undefined);

export default styled(Day)`
  ${color};
`;
