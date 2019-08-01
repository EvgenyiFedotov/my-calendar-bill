import * as React from 'react';

import { MONTHS, dateToSQL } from 'helpers/date';
import ChangesBill from 'components/subjects/Content/Dashboard/tabs/Dashboard/ChangesBill';
import ButtonLink from 'components/core/styled/ButtonLink';
import Row from 'components/core/styled/Row';
import TablesContext from 'components/subjects/contexts/Tables/context';
import useMapItem from 'hooks/use-map-item';
import ModalPanel from 'components/core/ModalPanel';
import Branch from 'components/core/Branch';
import InputText from 'components/core/styled/InputText';
import Column from 'components/core/styled/Column';
import LabelText from 'components/core/styled/LabelText';
import useField from 'hooks/use-field';
import { getPlanCount } from 'components/subjects/Content/Dashboard/heplers';
import Button from 'components/core/styled/Button';
import { getChangesBillByDate } from 'components/subjects/Content/Dashboard/heplers';

import Styled from './styled';

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

  const [titleRef, title] = useField();
  const [countRef, count] = useField();

  const save = React.useCallback(() => {
    const titleValue = title.getValue();
    const countValue = parseInt(count.getValue(), 10);

    if (titleValue && !isNaN(countValue)) {
      const [key, item] = changeBillMethods.save({
        date: new Date(date).getTime(),
        title: titleValue,
        count: countValue,
      });
      tables.changesBill.setCrypto(key, item);
    }
  }, [date, title, count, changeBillMethods, tables]);

  const counts = React.useMemo(() => {
    if (checksBill) {
      const checkBill = checksBill.get(dateToSQL(date));
      if (checkBill) return checkBill;
      if (changesBill)
        return { count: null, planCount: getPlanCount({ checksBill, changesBill, date }) };
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
  }, [currCount, tables, date, counts]);

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

      <Branch value={typeof counts.count === 'number'}>
        <Row alignItems="center" justifyContent="space-between">
          <span>Count: </span>
          <span>{counts.count}</span>
        </Row>

        <Row>
          <InputText placeholder="Count" type="number" ref={currCountRef} />
          <Button color="var(--main-color)" onClick={saveCheckBill}>
            Enter
          </Button>
        </Row>
      </Branch>

      <Row alignItems="center" justifyContent="space-between">
        <span>Plan count: </span>
        <LabelText>{counts.planCount}</LabelText>
      </Row>

      <Button color="var(--main-color)" onClick={changeBillMethods.create()}>
        Add
      </Button>
      <ChangesBill items={itemsChangesBill} />

      <Branch value={changeBill[0]}>
        <ModalPanel onClose={changeBillMethods.clear}>
          <Styled>
            <Column step={2}>
              <Row justifyContent="space-between" alignItems="center">
                <b>Change bill</b>

                <Row>
                  <ButtonLink onClick={changeBillMethods.clear}>Close</ButtonLink>
                </Row>
              </Row>

              <Column>
                <label>Title</label>
                <InputText placeholder="Title" ref={titleRef} />
              </Column>

              <Column>
                <label>Count</label>
                <InputText placeholder="Count" type="number" ref={countRef} />
              </Column>

              <Row justifyContent="flex-end" step={2}>
                <ButtonLink color="var(--error-color)">Delete</ButtonLink>
                <Button color="var(--main-color)" onClick={save}>
                  Save
                </Button>
              </Row>
            </Column>
          </Styled>
        </ModalPanel>
      </Branch>
    </Styled>
  );
};

export default DialogEditDate;
