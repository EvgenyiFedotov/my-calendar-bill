import * as React from 'react';
import { openDB } from 'helpers/index-db';

import useDate from 'hooks/use-date';

import Context from './context';
import useTheme from './use-theme';
import useStepperDate from 'hooks/use-stepper-date';
import useList from 'hooks/use-list';
import { dateToSQL } from 'helpers/date';

const db = openDB({
  tables: ['changesBill', 'checkList'],
  version: 3,
});

const App = ({ children }) => {
  const date = useDate();
  const stepperDate = useStepperDate(date);
  const changesBill = useList();
  const checkList = useList([
    [dateToSQL(new Date('2019-07-10')), { count: 2000, planCount: 2000 }],
    [dateToSQL(new Date('2019-07-15')), { count: 1000, planCount: 2000 }],
    [dateToSQL(new Date('2019-07-19')), { count: 3000, planCount: 2000 }],
    [dateToSQL(new Date('2019-07-25')), { count: null, planCount: 2000 }],
  ]);
  const theme = useTheme();

  return (
    <Context.Provider value={{ date, stepperDate, changesBill, checkList, theme }}>
      {children}
    </Context.Provider>
  );
};

export default App;
