import * as React from 'react';
import uuid from 'uuid/v4';

import useList from '../../../../hooks/use-list';
import { getBorderMonth, eachDate, dateToSQL } from '../../../../helpers/date';

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
      const add = (dateSQL, changeBill) => {
        if (!result.has(dateSQL)) result.set(dateSQL, []);
        result.get(dateSQL).push(changeBill);
      };

      Array.from(changesBill.items).forEach(([, changeBill]) => {
        const dateMonth = new Date(changeBill.date);
        dateMonth.setFullYear(date.getFullYear());
        dateMonth.setMonth(date.getMonth());
        const dateMonthSQL = dateToSQL(dateMonth);

        if (changeBill.type === 'repeat') {
          add(dateMonthSQL, changeBill);
        } else if (changeBill.type === 'once') {
          if (dateMonthSQL === dateToSQL(new Date(changeBill.date))) {
            add(dateMonthSQL, changeBill);
          }
        } else {
          // pass
        }
      });

      return result;
    },
    [changesBill],
  );

  return (
    <Context.Provider value={{ date, changesBill: { ...changesBill, getChangesBillMonth } }}>
      {children}
    </Context.Provider>
  );
};

export default App;
