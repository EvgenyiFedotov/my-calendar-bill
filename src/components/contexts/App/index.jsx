import * as React from 'react';

import useList from '../../../hooks/use-list';
import { isPrevDate, eachDate } from '../../../helpers/date';

import Context from './context';

const App = ({ children }) => {
  const changesBill = useList([
    [9, { date: new Date('2019-07-09'), type: 'repeat:date', count: -1000 }],
    [10, { date: new Date('2019-07-10'), type: 'repeat:date', count: 2500 }],
    [19, { date: new Date('2019-07-19'), type: 'repeat:date', count: -500 }],
    [25, { date: new Date('2019-07-25'), type: 'repeat:date', count: 2500 }],
    [251, { date: new Date('2019-07-25'), type: 'repeat:date', count: -200 }],
  ]);
  const getChangesBillDate = React.useCallback(
    date =>
      Array.from(changesBill.items).reduce(
        (memo, [key, item]) => {
          if (item.type === 'repeat:date' && item.date.getDate() === date.getDate()) {
            memo.changesBill.set(key, item);
            memo.summCount += item.count;

            if (item.count > 0) {
              memo.in = true;
            } else if (item.count < 0) {
              memo.out = true;
            } else {
              memo.zero = true;
            }
          }
          return memo;
        },
        { changesBill: new Map(), summCount: 0, in: undefined, out: undefined, zero: undefined },
      ),
    [changesBill],
  );
  const listChecks = useList([
    ['2019-07-02', { count: 0, planCount: 0 }],
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
            result += getChangesBillDate(date).summCount;
          },
          { last: true },
        );

        return result;
      }

      return null;
    },
    [getLastCheck, getChangesBillDate],
  );

  return (
    <Context.Provider
      value={{
        changesBill,
        getChangesBillDate,
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
