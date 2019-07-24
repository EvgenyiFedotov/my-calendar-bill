import * as React from 'react';

import useDate from 'hooks/use-date';
import Context from './context';
import useStepperDate from 'hooks/use-stepper-date';
import UserContext from 'components/subjects/contexts/User/context';
import { changesBillTable, checkListTable } from 'components/subjects/contexts/App/index-db';
// import { openDB, table } from 'helpers/index-db';

const App = ({ children }) => {
  const {
    // login: [login],
    data: { key },
  } = React.useContext(UserContext);

  const date = useDate();
  const stepperDate = useStepperDate(date);

  // const db = React.useMemo()

  const [changesBill, setChangesBill] = React.useState();
  const [checkList, setCheckList] = React.useState();

  // Load changes bill
  React.useEffect(() => {
    if (key) {
      changesBillTable
        .getMapCrypto(key, item => JSON.parse(item))
        .then(result => setChangesBill(result));
    }
  }, [setChangesBill, key]);

  // Load check list
  React.useEffect(() => {
    if (key) {
      checkListTable
        .getMapCrypto(key, item => JSON.parse(item))
        .then(result => setCheckList(result));
    }
  }, [setCheckList, key]);

  return (
    <Context.Provider
      value={{
        date,
        stepperDate,
        changesBill: [changesBill, setChangesBill],
        checkList: [checkList, setCheckList],
      }}
    >
      {!!(changesBill && checkList) && children}
    </Context.Provider>
  );
};

export default App;
