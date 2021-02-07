import * as React from 'react';

/**
 * Hook for use date and her added methods
 * @param {Date} [defaultDate = new Date()]
 */
export default (defaultDate = new Date()) => {
  const [date, setDate] = React.useState(defaultDate);

  const prevMonth = React.useCallback(
    () => setDate((prevDate) => {
      const nextDate = new Date(prevDate);
      nextDate.setMonth(nextDate.getMonth() - 1);
      return nextDate;
    }),
    [setDate],
  );

  const nextMonth = React.useCallback(
    () => setDate((prevDate) => {
      const nextDate = new Date(prevDate);
      nextDate.setMonth(nextDate.getMonth() + 1);
      return nextDate;
    }),
    [setDate],
  );

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
