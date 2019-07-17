import * as React from 'react';

import useDate from 'hooks/use-date';

import Context from './context';
import useChangesBill from './use-changes-bill';
import useCheckList from './use-check-list';
import useTheme from './use-theme';
import useStepperDate from 'hooks/use-stepper-date';

const App = ({ children }) => {
  const date = useDate();
  const stepperDate = useStepperDate(date);
  const changesBill = useChangesBill();
  const checkList = useCheckList(changesBill);
  const theme = useTheme();

  return (
    <Context.Provider value={{ date, stepperDate, changesBill, checkList, theme }}>
      {children}
    </Context.Provider>
  );
};

export default App;
