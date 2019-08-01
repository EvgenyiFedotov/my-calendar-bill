import * as React from 'react';

import InputText from 'components/core/styled/InputText';
import Button from 'components/core/styled/ButtonLink';
import Column from 'components/core/styled/Column';
import Row from 'components/core/styled/Row';
import TablesContext from 'components/subjects/contexts/Tables/context';
import ModalWindow from 'components/core/ModalWindow';
import Branch from 'components/core/Branch';
import useMapItem from 'hooks/use-map-item';
import useField from 'hooks/use-field';
import { dateToSQL } from 'helpers/date';

import Styled from './styled';

const DialogFirstCheck = () => {
  const {
    maps: {
      checksBill: [checksBill, setChecksBill],
    },
    tables,
  } = React.useContext(TablesContext);

  const [countRef, count] = useField();
  const [, checkBillMethods] = useMapItem([checksBill, setChecksBill]);

  const save = React.useCallback(() => {
    const countValue = parseInt(count.getValue(), 10);

    if (!isNaN(countValue)) {
      const [key, item] = checkBillMethods.save(
        {
          count: countValue,
          planCount: countValue,
        },
        dateToSQL(new Date()),
      );
      tables.checksBill.setCrypto(key, item);
    }
  }, [count, checkBillMethods, tables]);

  return (
    <Branch value={checksBill && !checksBill.size}>
      <ModalWindow>
        <Styled step={2}>
          <Column>
            <label>Current count</label>
            <InputText placeholder="Current count" ref={countRef} />
          </Column>

          <Row justifyContent="flex-end" alignItems="center">
            <Button onClick={save}>Save</Button>
          </Row>
        </Styled>
      </ModalWindow>
    </Branch>
  );
};

export default DialogFirstCheck;
