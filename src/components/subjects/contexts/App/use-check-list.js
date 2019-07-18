import * as React from 'react';

import useList from 'hooks/use-list';
import {
  dateToSQL, isPrevDate, eachDate, isEqualDate,
} from 'helpers/date';

export default (db, changesBill) => {
  const checkList = useList([
    [dateToSQL(new Date('2019-07-10')), { count: 2000, planCount: 2000 }],
    [dateToSQL(new Date('2019-07-15')), { count: 1000, planCount: 2000 }],
    [dateToSQL(new Date('2019-07-19')), { count: 3000, planCount: 2000 }],
    [dateToSQL(new Date('2019-07-25')), { count: null, planCount: 2000 }],
  ]);

  /**
   * Get first check
   *
   * @returns {[string, check]}
   */
  const firstCheck = React.useMemo(() => Array.from(checkList.items)[0], [checkList.items]);

  /**
   * Get sort keys check list
   */
  const getSortKeys = React.useCallback(
    () => Array.from(checkList.items.keys()).sort((a, b) => (a < b ? -1 : 1)),
    [checkList.items],
  );

  /**
   * Get last check
   * @param {Date} date
   *
   * @returns {[string, check]}
   */
  const getLastCheck = React.useCallback(
    (date) => {
      const keys = getSortKeys();
      let result = null;

      for (let index = 0; index < keys.length; index += 1) {
        const key = keys[index];
        const item = checkList.items.get(key);

        if (typeof item.count === 'number' && typeof item.planCount === 'number') {
          const dateKey = new Date(key);
          if (date && !isPrevDate(dateKey, date) && !isEqualDate(dateKey, date)) break;
          result = [key, item];
        }
      }

      return result;
    },
    [checkList.items, getSortKeys],
  );

  /**
   * Get plan count
   * @param {Date} date
   *
   * @returns {number}
   */
  const getPlanCount = React.useCallback(
    (date) => {
      const lastCheck = getLastCheck(date);

      if (lastCheck) {
        const [key, { count }] = lastCheck;
        let result = count;

        eachDate(
          new Date(key),
          date,
          (date) => {
            result += changesBill.getChangesByDirection(
              changesBill.getChangesBillMonth(date).get(dateToSQL(date)),
            ).summCount;
          },
          { last: true },
        );

        return result;
      }

      return null;
    },
    [getLastCheck, changesBill],
  );

  return {
    ...checkList,
    firstCheck,
    getSortKeys,
    getLastCheck,
    getPlanCount,
  };
};
