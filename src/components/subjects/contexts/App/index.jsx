import * as React from 'react';
import { openDB } from 'helpers/index-db';

import useDate from 'hooks/use-date';

import Context from './context';
import useChangesBill from './use-changes-bill';
import useCheckList from './use-check-list';
import useTheme from './use-theme';
import useStepperDate from 'hooks/use-stepper-date';

const db = openDB({
  tables: ['changesBill', 'checkList'],
  version: 3,
});

const App = ({ children }) => {
  const date = useDate();
  const stepperDate = useStepperDate(date);
  const changesBill = useChangesBill(db);
  const checkList = useCheckList(db, changesBill);
  const theme = useTheme();

  console.log('app');

  return (
    <Context.Provider value={{ date, stepperDate, changesBill, checkList, theme }}>
      {children}
    </Context.Provider>
  );
};

export default App;
