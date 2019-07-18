import * as React from 'react';
import rc4 from 'crypto-js/rc4';
import encUtf8 from 'crypto-js/enc-utf8';

import useList from 'hooks/use-list';
import { dateToSQL, isEqualDate } from 'helpers/date';
import UserContext from 'components/subjects/contexts/User/context';

export default (db) => {
  const { key: [key] } = React.useContext(UserContext);

  const changesBill = useList();

  /**
   * Get changes bill for month
   * @param {Date} date
   *
   * @returns {Map<[string, changeBill]>}
   */
  const getChangesBillMonth = React.useCallback(
    (date) => {
      const result = new Map();
      const getDateMonth = (changeBill, getMonth = date => date.getMonth()) => {
        const dateMonth = new Date(changeBill.date);
        dateMonth.setFullYear(date.getFullYear());
        dateMonth.setMonth(getMonth(dateMonth));
        return dateMonth;
      };
      const add = ([keyChangeBill, changeBill], getMonth) => {
        const dateMonth = getDateMonth(changeBill, getMonth);
        const dateSQL = dateToSQL(dateMonth);
        if (!result.has(dateSQL)) result.set(dateSQL, new Map());
        result.get(dateSQL).set(keyChangeBill, changeBill);
      };

      Array.from(changesBill.items).forEach((changeBill) => {
        if (changeBill[1].type === 'repeat') {
          add(changeBill);

          // Prev month
          add(changeBill, date => date.getMonth() - 1);

          // Next month
          add(changeBill, date => date.getMonth() + 1);
        } else if (
          changeBill[1].type === 'once'
          && isEqualDate(getDateMonth(changeBill[1]), new Date(changeBill[1].date))
        ) {
          add(changeBill);
        }
      });

      return result;
    },
    [changesBill],
  );

  /**
   * Get changes bill by direction
   * @param {Map} changesBill
   */
  const getChangesByDirection = React.useCallback((changesBill) => {
    const result = {
      in: new Map(),
      out: new Map(),
      zero: new Map(),
      summCount: 0,
    };

    if (changesBill) {
      Array.from(changesBill).forEach(([keyChangeBill, changeBill]) => {
        if (changeBill.count > 0) {
          result.in.set(keyChangeBill, changeBill);
          result.summCount += changeBill.count;
        } else if (changeBill.count < 0) {
          result.out.set(keyChangeBill, changeBill);
          result.summCount += changeBill.count;
        } else {
          result.zero.set(keyChangeBill, changeBill);
        }
      });
    }

    return result;
  }, []);


  return {
    ...changesBill,
    getChangesBillMonth,
    getChangesByDirection,
  };
};
