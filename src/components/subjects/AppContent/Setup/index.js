import * as React from 'react';

import InputText from 'components/core/styled/InputText';
import Button from 'components/core/styled/Button';
import useField from 'hooks/use-field';
import AppContext from 'components/subjects/contexts/App/context';
import useListItem from 'hooks/use-list-item';
import { dateToSQL } from 'helpers/date';
import { checkListTable } from 'components/subjects/contexts/App/index-db';
import UserContext from 'components/subjects/contexts/User/context';

const Setup = () => {
  const {
    key: [hashKey],
  } = React.useContext(UserContext);
  const { checkList } = React.useContext(AppContext);
  const { saveItem } = useListItem(checkList);

  const [countRef, count] = useField();
  const send = React.useCallback(() => {
    const countValue = parseInt(count.getValue(), 10);
    if (!isNaN(countValue) && typeof countValue === 'number') {
      const key = dateToSQL(new Date());
      const item = {
        count: countValue,
        planCount: countValue,
      };

      saveItem(item, key);
      checkListTable.setCrypto(key, JSON.stringify(item), hashKey);
    }
  }, [count, saveItem, hashKey]);

  return (
    <>
      <InputText placeholder="Curren count" type="number" ref={countRef} />
      <Button onClick={send}>Send</Button>
    </>
  );
};

export default Setup;
