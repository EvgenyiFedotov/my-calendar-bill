import * as React from 'react';

import { isEqualMonth, isHoliday } from '../../../../../helpers/date';

import Styled from './styled';

/**
 * Component `Day`
 * @param {Date} dateWeek
 * @param {Date} date
 */
const Day = ({ dateWeek, date, children, ...props }) => {
  return (
    <Styled otherMonth={!isEqualMonth(dateWeek, date)} holiday={isHoliday(dateWeek)} {...props}>
      {children || dateWeek.getDate()}
    </Styled>
  );
};

export default Day;
