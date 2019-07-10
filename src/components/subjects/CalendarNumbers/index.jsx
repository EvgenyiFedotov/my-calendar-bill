import * as React from 'react';

import Calendar from '../../Calendar';
import { isEqualMonth } from '../../../helpers/date';

/**
 * Component `CalendarNumbers`
 * @param {number} [defaultSelectedDate]
 */
const CalendarNumbers = ({ defaultSelectedDate }, ref) => {
  const defaultDate = React.useMemo(() => new Date('2019-07-01'), []);
  const [selectedDate, setSelectedDate] = React.useState(defaultSelectedDate);
  const clickDay = React.useCallback(
    ({ dateWeek, date }) => {
      isEqualMonth(dateWeek, date) && setSelectedDate(dateWeek.getDate());
    },
    [setSelectedDate],
  );
  const getDayProps = React.useCallback(
    ({ dateWeek, date }) => ({
      holiday: false,
      selected: selectedDate
        ? isEqualMonth(dateWeek, date) && selectedDate === dateWeek.getDate()
        : false,
      onClick: clickDay,
    }),
    [selectedDate, clickDay],
  );
  const getDayContent = React.useCallback(
    ({ dateWeek, date }) => (isEqualMonth(dateWeek, date) ? dateWeek.getDate() : ''),
    [],
  );

  React.useImperativeHandle(
    ref,
    () => ({
      getSelectedDate: () => selectedDate,
    }),
    [selectedDate],
  );

  return (
    <Calendar
      showSixthWeek={false}
      date={defaultDate}
      getDayProps={getDayProps}
      getDayContent={getDayContent}
    />
  );
};

export default React.forwardRef(CalendarNumbers);
