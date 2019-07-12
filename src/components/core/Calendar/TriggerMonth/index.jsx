import * as React from 'react';

import { dateToShortMonth } from '../../../../helpers/date';
import Row from '../../styled/Row';
import Box from '../../styled/Box';

/**
 * Component `CalendarTrigger`
 * @param {Date} [date = new Date()]
 * @param {(date: Date) => {}} [onChangeDate = () => {}]
 */
const CalendarTrigger = ({ date = new Date(), onChangeDate = () => {} }) => {
  const prevMonth = React.useCallback(
    () =>
      onChangeDate(prevDate => {
        const nextDate = new Date(prevDate);
        nextDate.setMonth(nextDate.getMonth() - 1);
        return nextDate;
      }),
    [onChangeDate],
  );

  const nextMonth = React.useCallback(
    () =>
      onChangeDate(prevDate => {
        const nextDate = new Date(prevDate);
        nextDate.setMonth(nextDate.getMonth() + 1);
        return nextDate;
      }),
    [onChangeDate],
  );

  const moveToToday = React.useCallback(() => onChangeDate(new Date()), [onChangeDate]);

  return (
    <Row>
      <Box width={2} onClick={prevMonth} disabled={true}>
        Prev
      </Box>
      <Box width={3} onClick={moveToToday}>
        {`${dateToShortMonth(date)}' ${date
          .getFullYear()
          .toString()
          .slice(2)}`}
      </Box>
      <Box width={2} onClick={nextMonth} disabled={true}>
        Next
      </Box>
    </Row>
  );
};

export default CalendarTrigger;
