import * as React from 'react';

import { dateToShortMonth } from '../../helpers/date';
import Row from '../styled/Row';
import Box from '../styled/Box';

/**
 * Component `CalendarTrigger`
 * @param {Date} date
 * @param {React.Dispatch<any>} setDate
 */
const CalendarTrigger = ({ date, setDate }) => {
  const prevMonth = React.useCallback(
    () =>
      setDate(prevDate => {
        const nextDate = new Date(prevDate);
        nextDate.setMonth(nextDate.getMonth() - 1);
        return nextDate;
      }),
    [setDate],
  );

  const nextMonth = React.useCallback(
    () =>
      setDate(prevDate => {
        const nextDate = new Date(prevDate);
        nextDate.setMonth(nextDate.getMonth() + 1);
        return nextDate;
      }),
    [setDate],
  );

  const moveToToday = React.useCallback(() => setDate(new Date()), [setDate]);

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
