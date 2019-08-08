import * as React from 'react';

import { MONTHS, dateToSQL, isPrevDate } from 'helpers/date';
import ChangesBill from 'components/subjects/Content/Dashboard/tabs/Dashboard/ChangesBill';
import ButtonLink from 'components/core/styled/ButtonLink';
import { Row } from 'components/core/styled/Flex';
import TablesContext from 'components/subjects/contexts/Tables/context';
import useMapItem from 'hooks/use-map-item';
import Branch from 'components/core/Branch';
import InputText from 'components/core/styled/InputText';
import useField from 'hooks/use-field';
import { getPlanCount } from 'components/subjects/Content/Dashboard/heplers';
import Button from 'components/core/styled/Button';
import { getChangesBillByDate } from 'components/subjects/Content/Dashboard/heplers';
import { numToMoneyStr } from 'helpers/number';

import Styled from './styled';
import DialogEditChangeBill from './DialogEditChangeBill';

/**
 * @param {Date} date
 * @param {() => void} [onClose = () => {}]
 */
const DialogEditDate = ({ date, onClose = () => {} }) => {
  const {
    maps: {
      changesBill: [changesBill, setChangesBill],
      checksBill: [checksBill, setChecksBill],
    },
    tables,
  } = React.useContext(TablesContext);

  const [changeBill, changeBillMethods] = useMapItem([changesBill, setChangesBill]);

  const counts = React.useMemo(() => {
    if (checksBill) {
      const checkBill = checksBill.get(dateToSQL(date));
      if (checkBill) return checkBill;
      if (changesBill)
        return { count: null, planCount: getPlanCount({ checksBill, changesBill, date }).summ };
    }

    return { count: null, planCount: 0 };
  }, [checksBill, changesBill, date]);

  const itemsChangesBill = React.useMemo(() => {
    if (changesBill) {
      if (date) {
        return getChangesBillByDate(changesBill, date).get(dateToSQL(date)) || new Map();
      } else {
        return changesBill;
      }
    }
  }, [date, changesBill]);

  const [currCountRef, currCount] = useField();
  const [, checkBillMehtods] = useMapItem([checksBill, setChecksBill]);
  const saveCheckBill = React.useCallback(() => {
    const currCountValue = parseInt(currCount.getValue(), 10);
    if (!isNaN(currCountValue)) {
      const [key, item] = checkBillMehtods.save(
        {
          count: currCountValue,
          planCount: counts.planCount,
        },
        dateToSQL(date),
      );
      tables.checksBill.setCrypto(key, item);
    }
  }, [currCount, tables, date, counts, checkBillMehtods]);

  return (
    <Styled step={2}>
      <Row justifyContent="space-between" alignItems="center">
        <b>
          {date.getDate()}th {MONTHS[date.getMonth()]} {date.getFullYear()}
        </b>

        <Row>
          <ButtonLink onClick={onClose}>Close</ButtonLink>
        </Row>
      </Row>

      <Branch value={isPrevDate(date, new Date())}>
        <Branch value={typeof counts.count === 'number'}>
          <Row step={1} alignItems="center" justifyContent="space-between">
            <span>Count: </span>
            <span>{counts.count !== null && numToMoneyStr(counts.count)}</span>
          </Row>

          <Row step={1}>
            <InputText placeholder="Count" type="number" ref={currCountRef} style={{ flex: 1 }} />
            <Button color="var(--main-color)" onClick={saveCheckBill}>
              Enter
            </Button>
          </Row>
        </Branch>
      </Branch>

      <Row alignItems="center" justifyContent="space-between">
        <span>Plan count: </span>
        <span>{numToMoneyStr(counts.planCount)}</span>
      </Row>

      <Button color="var(--main-color)" onClick={changeBillMethods.create()}>
        Add
      </Button>

      <ChangesBill items={itemsChangesBill} item={[changeBill, changeBillMethods]} />

      <Branch value={changeBill[0]}>
        <DialogEditChangeBill date={date} item={[changeBill, changeBillMethods]} />
      </Branch>
    </Styled>
  );
};

export default DialogEditDate;
