import * as React from 'react';

import { MONTHS } from 'helpers/date';
import ChangesBill from 'components/subjects/Content/Dashboard/tabs/Dashboard/ChangesBill';
import ChecksBill from 'components/subjects/Content/Dashboard/tabs/Dashboard/ChecksBill';
import Button from 'components/core/styled/Button';
import Row from 'components/core/styled/Row';
import TablesContext from 'components/subjects/contexts/Tables/context';
import useMapItem from 'hooks/use-map-item';
import ModalPanel from 'components/core/ModalPanel';
import Branch from 'components/core/Branch';

import Styled from './styled';

/**
 * @param {Date} date
 * @param {() => void} [onClose = () => {}]
 */
const DialogEditDate = ({ date, onClose = () => {} }) => {
  const {
    maps: { changesBill, checksBill },
  } = React.useContext(TablesContext);

  const [changeBill, changeBillMethods] = useMapItem(changesBill);
  const [checkBill, checkBillMethods] = useMapItem(checksBill);

  console.log(changeBill, checkBill);

  return (
    <Styled>
      <Row justifyContent="space-between" alignItems="center">
        <b>
          {date.getDate()}th {MONTHS[date.getMonth()]} {date.getFullYear()}
        </b>

        <Row>
          <Button onClick={onClose}>Close</Button>
        </Row>
      </Row>

      <Button onClick={changeBillMethods.create()}>Add</Button>
      <ChangesBill />
      <Branch value={changeBill[0]}>
        <ModalPanel onClose={changeBillMethods.clear} />
      </Branch>

      <Button onClick={checkBillMethods.create()}>Add</Button>
      <ChecksBill />
      <Branch value={checkBill[0]}>
        <ModalPanel onClose={checkBillMethods.clear} />
      </Branch>
    </Styled>
  );
};

export default DialogEditDate;
