import * as React from 'react';

import { dateToMonth } from 'helpers/date';
import Row from 'components/core/styled/Row';
import Box from 'components/core/styled/Box';
import Column from 'components/core/styled/Column';

/**
 * Component `CalendarTrigger`
 * @param {Date} [date = new Date()]
 * @param {(date: Date) => void} [onChangeDate = () => {}]
 * @param {() => void} [onClickMonth = () => {}]
 * @param {() => void} [onClickYear = () => {}]
 */
const CalendarTrigger = ({
  date = new Date(),
  onChangeDate = () => {},
  onClickMonth = () => {},
  onClickYear = () => {},
}) => {
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
    <Column>
      <Row>
        <Box width={3.5} onClick={onClickMonth}>
          {dateToMonth(date)}
        </Box>
        <Box width={3.5} onClick={onClickYear}>
          {date.getFullYear()}
        </Box>
      </Row>

      <Row>
        <Box width={2} onClick={prevMonth} disabled={true}>
          Prev
        </Box>
        <Box width={3} onClick={moveToToday}>
          Today
        </Box>
        <Box width={2} onClick={nextMonth} disabled={true}>
          Next
        </Box>
      </Row>
    </Column>
  );
};

export default CalendarTrigger;
