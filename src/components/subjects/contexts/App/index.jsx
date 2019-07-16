import * as React from 'react';

import AppGlobalStyled from 'components/core/styled/AppGlobal';
import useDate from 'hooks/use-date';

import Context from './context';
import useChangesBill from './use-changes-bill';
import useCheckList from './use-check-list';
import useTheme from './use-theme';
import useStepperDate from './use-stepper-date';

const App = ({ children }) => {
  const date = useDate();
  const stepperDate = useStepperDate(date);
  const changesBill = useChangesBill();
  const checkList = useCheckList(changesBill);
  const theme = useTheme();

  return (
    <Context.Provider value={{ date, stepperDate, changesBill, checkList, theme }}>
      <AppGlobalStyled theme={theme[0]} />
      {children}
    </Context.Provider>
  );
};

export default App;
