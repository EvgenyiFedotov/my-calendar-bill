import * as React from 'react';

import useDate from 'hooks/use-date';
import Context from './context';
import useStepperDate from 'hooks/use-stepper-date';
import useIndexDB from 'hooks/use-index-db';
import useTableDB from 'hooks/use-table-db';
import UserContext from 'components/subjects/contexts/User/context';

const App = ({ children }) => {
  const { data } = React.useContext(UserContext);

  const date = useDate();
  const stepperDate = useStepperDate(date);

  const optionsDB = React.useMemo(
    () => ({
      tables: ['changesBill', 'checkList'],
      tablesAlises: ['changesBill', 'checkList'],
      cryptoKey: data.key,
    }),
    [data.key],
  );
  const db = useIndexDB(optionsDB);
  const [changesBill, setChangesBill] = useTableDB(db.tables.changesBill);
  const [checkList, setCheckList] = useTableDB(db.tables.checkList);

  return (
    <Context.Provider
      value={{
        date,
        stepperDate,
        db,
        changesBill: [changesBill, setChangesBill],
        checkList: [checkList, setCheckList],
      }}
    >
      {!!(changesBill && checkList) && children}
    </Context.Provider>
  );
};

export default App;
