import * as React from 'react';

import InputText from 'components/core/styled/InputText';
import Button from 'components/core/styled/Button';
import useField from 'hooks/use-field';
import AppContext from 'components/subjects/contexts/App/context';
import useMapItem from 'hooks/use-map-item';
import { dateToSQL } from 'helpers/date';
import UserContext from 'components/subjects/contexts/User/context';
import Branch from 'components/core/Branch';

const Setup = ({ children }) => {
  const {
    data: { key },
  } = React.useContext(UserContext);
  const { checkList, db } = React.useContext(AppContext);
  const { save } = useMapItem(checkList, db.tables.checkList);

  const [countRef, count] = useField();
  const send = React.useCallback(() => {
    const countValue = parseInt(count.getValue(), 10);
    if (!isNaN(countValue) && typeof countValue === 'number') {
      const keyItem = dateToSQL(new Date());
      const item = {
        count: countValue,
        planCount: countValue,
      };

      save(item, keyItem);
    }
  }, [count, save, key]);

  return (
    <Branch value={Array.from(checkList[0])[0]}>
      <>{children}</>

      <>
        <InputText placeholder="Current count" type="number" ref={countRef} />
        <Button onClick={send}>Send</Button>
      </>
    </Branch>
  );
};

export default Setup;
