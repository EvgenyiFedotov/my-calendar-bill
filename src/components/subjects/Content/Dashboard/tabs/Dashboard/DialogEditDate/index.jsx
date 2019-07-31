import * as React from 'react';

import { MONTHS } from 'helpers/date';
import ChangesBill from 'components/subjects/Content/Dashboard/tabs/Dashboard/ChangesBill';
import Button from 'components/core/styled/Button';
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

import Styled from './styled';

/**
 * @param {Date} date
 * @param {() => void} [onClose = () => {}]
 */
const DialogEditDate = ({ date, onClose = () => {} }) => {
  const {
    maps: {
      changesBill: [changesBill, setChangesBill],
      checksBill: [checksBill],
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

  const planCount = React.useMemo(
    () => (checksBill && changesBill ? getPlanCount({ checksBill, changesBill, date }) : 0),
    [checksBill, changesBill, date],
  );

  return (
    <Styled step={2}>
      <Row justifyContent="space-between" alignItems="center">
        <b>
          {date.getDate()}th {MONTHS[date.getMonth()]} {date.getFullYear()}
        </b>

        <Row>
          <Button onClick={onClose}>Close</Button>
        </Row>
      </Row>

      <Row alignItems="center">
        <span>Plan count: </span>
        <LabelText>{planCount}</LabelText>
      </Row>

      <Button onClick={changeBillMethods.create()}>Add</Button>
      <ChangesBill date={date} />
      <Branch value={changeBill[0]}>
        <ModalPanel onClose={changeBillMethods.clear}>
          <Styled>
            <Column step={2}>
              <Column>
                <label>Title</label>
                <InputText placeholder="Title" ref={titleRef} />
              </Column>

              <Column>
                <label>Count</label>
                <InputText placeholder="Count" type="number" ref={countRef} />
              </Column>

              <Row justifyContent="flex-end" step={2}>
                <Button onClick={changeBillMethods.clear}>Close</Button>
                <Button onClick={save}>Save</Button>
              </Row>
            </Column>
          </Styled>
        </ModalPanel>
      </Branch>
    </Styled>
  );
};

export default DialogEditDate;
