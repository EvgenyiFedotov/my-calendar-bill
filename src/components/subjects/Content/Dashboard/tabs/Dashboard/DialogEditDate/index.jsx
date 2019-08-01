import * as React from 'react';

import { MONTHS } from 'helpers/date';
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
          <ButtonLink onClick={onClose}>Close</ButtonLink>
        </Row>
      </Row>

      <Row alignItems="center">
        <span>Plan count: </span>
        <LabelText>{planCount}</LabelText>
      </Row>

      <ButtonLink onClick={changeBillMethods.create()}>Add</ButtonLink>
      <ChangesBill date={date} />

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
                <Branch>
                  <ButtonLink color="var(--error-color)">Delete</ButtonLink>
                </Branch>
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
