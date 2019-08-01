import * as React from 'react';

import ButtonLink from 'components/core/styled/ButtonLink';
import Row from 'components/core/styled/Row';
import ModalPanel from 'components/core/ModalPanel';
import InputText from 'components/core/styled/InputText';
import Column from 'components/core/styled/Column';
import Button from 'components/core/styled/Button';
import Branch from 'components/core/Branch';
import Styled from 'components/subjects/Content/Dashboard/tabs/Dashboard/DialogEditDate/styled';
import TablesContext from 'components/subjects/contexts/Tables/context';
import useField from 'hooks/use-field';

const DialogEditChangeBill = ({ date, item: [changeBill, changeBillMethods] }) => {
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

  return (
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
  );
};

export default DialogEditChangeBill;
