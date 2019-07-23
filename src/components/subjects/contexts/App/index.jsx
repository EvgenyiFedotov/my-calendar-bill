import * as React from 'react';

import useDate from 'hooks/use-date';
import Context from './context';
import useTheme from './use-theme';
import useStepperDate from 'hooks/use-stepper-date';
import UserContext from 'components/subjects/contexts/User/context';
import { changesBillTable, checkListTable } from 'components/subjects/contexts/App/index-db';

const App = ({ children }) => {
  const {
    key: [hashKey],
  } = React.useContext(UserContext);
  const date = useDate();
  const stepperDate = useStepperDate(date);
  const [changesBill, setChangesBill] = React.useState(new Map());
  const [checkList, setCheckList] = React.useState(new Map());
  const theme = useTheme();

  // Load changes bill
  React.useEffect(() => {
    if (hashKey) {
      changesBillTable
        .getMapCrypto(hashKey, item => JSON.parse(item))
        .then(result => setChangesBill(result));
    }
  }, [setChangesBill, hashKey]);

  // Load check list
  React.useEffect(() => {
    if (hashKey) {
      checkListTable
        .getMapCrypto(hashKey, item => JSON.parse(item))
        .then(result => setCheckList(result));
    }
  }, [setCheckList, hashKey]);

  console.log('app');

  return (
    <Context.Provider
      value={{
        date,
        stepperDate,
        changesBill: [changesBill, setChangesBill],
        checkList: [checkList, setCheckList],
        theme,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default App;
