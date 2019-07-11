import * as React from 'react';

import { isEqualDate } from '../helpers/date';

/**
 * Hook
 * @param {() => boolean} [checkClickDate=() => true]
 */
export default (options = {}) => {
  const { checkClickDate = () => true } = options;
  const [selectedDate, setSelectedDate] = React.useState();
  const isSelectedDate = React.useCallback(
    date => selectedDate && isEqualDate(date, selectedDate),
    [selectedDate],
  );
  const clickDate = React.useCallback(
    (params) => {
      const { dateWeek } = params;
      checkClickDate(params) && setSelectedDate(dateWeek);
    },
    [setSelectedDate, checkClickDate],
  );

  return [selectedDate, { isSelectedDate, setSelectedDate, clickDate }];
};
