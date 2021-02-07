import * as React from 'react';

import { isEqualDate } from '../helpers/date';

/**
 * Hook use selected date
 * @param {Date} [defaultDate]
 */
export default (defaultDate) => {
  const [selectedDate, setSelectedDate] = React.useState(defaultDate);
  const isSelectedDate = React.useCallback(
    date => selectedDate && isEqualDate(date, selectedDate),
    [selectedDate],
  );

  return [selectedDate, { isSelectedDate, setSelectedDate }];
};
