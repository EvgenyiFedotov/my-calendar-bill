import styled, { css } from 'styled-components';

import DayStyled from '../../../Calendar/Day/styled';

const color = ({ prevDate = false, ...props }) => (prevDate
  ? css`
        color: var(--gray-color);
      `
  : undefined);

export default styled(DayStyled)`
  ${color};
`;
