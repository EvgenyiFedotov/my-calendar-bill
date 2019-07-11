import * as React from 'react';

import useList from '../../../hooks/use-list';
import { isPrevDate, eachDate } from '../../../helpers/date';

import Context from './context';

const App = ({ children }) => {
  const changesBill = useList([
    [9, { name: '#1', date: new Date('2019-07-09'), type: 'out', count: 1000 }],
    [10, { name: '#2', date: new Date('2019-07-10'), type: 'in', count: 2500 }],
    [19, { name: '#3', date: new Date('2019-07-19'), type: 'out', count: 500 }],
    [25, { name: '#4', date: new Date('2019-07-25'), type: 'in', count: 2500 }],
  ]);
  const changesBillByType = React.useMemo(
    () =>
      Array.from(changesBill.items).reduce(
        (memo, [, { type, date, count }]) => {
          memo[type].set(date.getDate(), count + (memo[type].get(date) || 0));
          return memo;
        },
        { in: new Map(), out: new Map() },
      ),
    [changesBill.items],
  );
  const listChecks = useList([
    ['2019-07-10', { count: 0, planCount: 0 }],
    // ['2019-07-19', { count: 100, planCount: 4500 }],
    // ['2019-07-25', { count: 2000, planCount: 3500 }],
  ]);
  /**
   * @param {Date} date
   *
   * @returns {[string, check]}
   */
  const getLastCheck = React.useCallback(
    date => {
      const sortKeys = Array.from(listChecks.items.keys()).sort((a, b) => {
        return a < b ? -1 : 1;
      });
      let result = null;

      for (let index = 0; index < sortKeys.length; index += 1) {
        const key = sortKeys[index];
        const item = listChecks.items.get(key);

        if (typeof item.count === 'number' && typeof item.planCount === 'number') {
          if (date && !isPrevDate(new Date(key), date)) break;
          result = [key, item];
        }
      }

      return result;
    },
    [listChecks.items],
  );

  /**
   * Get plan count
   * @param {Date} date
   *
   * @returns {number}
   */
  const getPlanCount = React.useCallback(
    date => {
      const lastCheck = getLastCheck(date);

      if (lastCheck) {
        const [key, { count }] = lastCheck;
        let result = count;

        eachDate(
          new Date(key),
          date,
          date => {
            result += changesBillByType.in.get(date.getDate()) || 0;
            result -= changesBillByType.out.get(date.getDate()) || 0;
          },
          { last: true },
        );

        return result;
      }

      return null;
    },
    [getLastCheck, changesBillByType],
  );

  return (
    <Context.Provider
      value={{
        changesBill,
        changesBillByType,
        listChecks,
        getLastCheck,
        getPlanCount,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default App;
