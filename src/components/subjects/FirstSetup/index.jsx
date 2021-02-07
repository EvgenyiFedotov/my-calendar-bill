import * as React from 'react';

import InputText from 'components/core/styled/InputText';
import Button from 'components/core/styled/Button';
import useField from 'hooks/use-field';
import AppContext from 'components/subjects/contexts/App/context';
import useMapItem from 'hooks/use-map-item';
import { dateToSQL } from 'helpers/date';
import Branch from 'components/core/Branch';
import PageContent from 'components/core/PageContent';
import Column from 'components/core/styled/Column';

const Setup = ({ children }) => {
  const {
    checkList,
    db: [tables],
  } = React.useContext(AppContext);
  const [, { save }] = useMapItem(checkList, tables.checkList);

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
  }, [count, save]);

  return (
    <Branch value={Array.from(checkList[0])[0]}>
      <>{children}</>

      <PageContent contentProps={{ justifyContent: 'center' }}>
        <Column justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
          <InputText placeholder="Current count" type="number" ref={countRef} />
          <Button onClick={send}>Send</Button>
        </Column>
      </PageContent>
    </Branch>
  );
};

export default Setup;
