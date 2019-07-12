import * as React from 'react';
import uuid from 'uuid/v4';

import useList from '../../../../hooks/use-list';
import { dateToSQL } from '../../../../helpers/date';

import Context from './context';

const App = ({ children }) => {
  const date = React.useState(new Date());

  const changesBill = useList([
    [uuid(), { date: new Date('2019-07-10').getTime(), type: 'repeat', count: 1000 }],
    [uuid(), { date: new Date('2019-07-19').getTime(), type: 'repeat', count: -500 }],
    [uuid(), { date: new Date('2019-07-25').getTime(), type: 'repeat', count: 1000 }],
    [uuid(), { date: new Date('2019-07-09').getTime(), type: 'repeat', count: -300 }],
    [uuid(), { date: new Date('2019-07-29').getTime(), type: 'once', count: 170 }],
    [uuid(), { date: new Date('2019-07-19').getTime(), type: 'once', count: -100 }],
    [uuid(), { date: new Date('2019-08-03').getTime(), type: 'once', count: -70 }],
  ]);

  /**
   * Get changes bill for month
   * @param {Date} date
   */
  const getChangesBillMonth = React.useCallback(
    date => {
      const result = new Map();
      const add = (dateSQL, keyChangeBill, changeBill) => {
        if (!result.has(dateSQL)) result.set(dateSQL, new Map());
        result.get(dateSQL).set(keyChangeBill, changeBill);
      };

      Array.from(changesBill.items).forEach(([keyChangeBill, changeBill]) => {
        const dateMonth = new Date(changeBill.date);
        dateMonth.setFullYear(date.getFullYear());
        dateMonth.setMonth(date.getMonth());
        const dateMonthSQL = dateToSQL(dateMonth);

        if (changeBill.type === 'repeat') {
          add(dateMonthSQL, keyChangeBill, changeBill);
        } else if (changeBill.type === 'once') {
          if (dateMonthSQL === dateToSQL(new Date(changeBill.date))) {
            add(dateMonthSQL, keyChangeBill, changeBill);
          }
        } else {
          // pass
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
  const getChangesByDirection = React.useCallback(
    changesBill => {
      const result = { in: new Map(), out: new Map(), zero: new Map(), summCount: 0 };

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
    },
    [changesBill],
  );

  return (
    <Context.Provider
      value={{ date, changesBill: { ...changesBill, getChangesBillMonth, getChangesByDirection } }}
    >
      {children}
    </Context.Provider>
  );
};

export default App;
