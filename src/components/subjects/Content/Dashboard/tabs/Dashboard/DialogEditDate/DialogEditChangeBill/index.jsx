import * as React from 'react';

import ButtonLink from 'components/core/styled/ButtonLink';
import ModalPanel from 'components/core/ModalPanel';
import InputText from 'components/core/styled/InputText';
import { Column, Row } from 'components/core/styled/Flex';
import Button from 'components/core/styled/Button';
import Branch from 'components/core/Branch';
import Styled from 'components/subjects/Content/Dashboard/tabs/Dashboard/DialogEditDate/styled';
import TablesContext from 'components/subjects/contexts/Tables/context';
import useField from 'hooks/use-field';

const DialogEditChangeBill = ({ date, item: [[keyChangeBill, changeBill], changeBillMethods] }) => {
  const { tables } = React.useContext(TablesContext);

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

  const remove = React.useCallback(() => {
    const key = changeBillMethods.remove();
    tables.changesBill.remove(key);
  }, [changeBillMethods, tables]);

  return (
    <ModalPanel onClose={changeBillMethods.clear}>
      <Styled>
        <Column marginStep={2}>
          <Row justifyContent="space-between" alignItems="center">
            <b>Change bill</b>

            <Row>
              <ButtonLink onClick={changeBillMethods.clear}>Close</ButtonLink>
            </Row>
          </Row>

          <Column>
            <label>Title</label>
            <InputText placeholder="Title" ref={titleRef} defaultValue={changeBill.title} />
          </Column>

          <Column>
            <label>Count</label>
            <InputText
              placeholder="Count"
              type="number"
              ref={countRef}
              defaultValue={changeBill.count}
            />
          </Column>

          <Row justifyContent="flex-end" marginStep={2}>
            <Branch value={!changeBillMethods.isNew()}>
              <ButtonLink color="var(--error-color)" onClick={remove}>
                Delete
              </ButtonLink>
            </Branch>

            <Button color="var(--main-color)" onClick={save}>
              Save
            </Button>
          </Row>
        </Column>
      </Styled>
    </ModalPanel>
  );
};

export default DialogEditChangeBill;
