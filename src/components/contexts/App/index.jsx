import * as React from 'react';

import useList from '../../../hooks/use-list';

import Context from './context';

const App = ({ children }) => {
  const changesBill = useList([
    [9, { name: '#1', date: 9, type: 'out', count: 1000 }],
    [10, { name: '#2', date: 10, type: 'in', count: 2500 }],
    [19, { name: '#3', date: 19, type: 'out', count: 500 }],
    [25, { name: '#4', date: 25, type: 'in', count: 2500 }],
  ]);
  const changesBillByType = React.useMemo(
    () =>
      Array.from(changesBill.items).reduce(
        (memo, [, { type, date }]) => {
          memo[type].set(date, true);
          return memo;
        },
        { in: new Map(), out: new Map() },
      ),
    [changesBill.items],
  );
  const lastCheckedCount = React.useState(1000);
  const lastCheckedDate = React.useState(new Date());
  const listChecks = useList([
    ['2019-07-10', { count: 2000, planCount: 3000 }],
    ['2019-07-19', { count: 5000, planCount: 2000 }],
    ['2019-07-24', { count: 10000, planCount: 5000 }],
  ]);

  return (
    <Context.Provider
      value={{ changesBill, changesBillByType, lastCheckedCount, lastCheckedDate, listChecks }}
    >
      {children}
    </Context.Provider>
  );
};

export default App;
