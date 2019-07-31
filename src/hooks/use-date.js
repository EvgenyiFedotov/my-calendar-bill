import * as React from 'react';

import { prevMonth as prevMonthDate, nextMonth as nextMonthDate } from 'helpers/date';

/**
 * Hook for use date and her added methods
 * @param {Date} [defaultDate = new Date()]
 */
export default (defaultDate = new Date()) => {
  const [date, setDate] = React.useState(defaultDate);

  const prevMonth = React.useCallback(() => setDate(prevMonthDate), [setDate]);

  const nextMonth = React.useCallback(() => setDate(nextMonthDate), [setDate]);

  const today = React.useCallback(() => setDate(new Date()), [setDate]);

  const prevYear = React.useCallback(
    () => setDate((prevDate) => {
      const nextDate = new Date(prevDate);
      nextDate.setFullYear(nextDate.getFullYear() - 1);
      return nextDate;
    }),
    [setDate],
  );

  const nextYear = React.useCallback(
    () => setDate((prevDate) => {
      const nextDate = new Date(prevDate);
      nextDate.setFullYear(nextDate.getFullYear() + 1);
      return nextDate;
    }),
    [setDate],
  );

  const prevYears = React.useCallback(
    () => setDate((prevDate) => {
      const nextDate = new Date(prevDate);
      nextDate.setFullYear(nextDate.getFullYear() - 4);
      return nextDate;
    }),
    [setDate],
  );

  const nextYears = React.useCallback(
    () => setDate((prevDate) => {
      const nextDate = new Date(prevDate);
      nextDate.setFullYear(nextDate.getFullYear() + 4);
      return nextDate;
    }),
    [setDate],
  );

  return [
    date,
    {
      setDate,
      prevMonth,
      nextMonth,
      today,
      prevYear,
      nextYear,
      prevYears,
      nextYears,
    },
  ];
};
