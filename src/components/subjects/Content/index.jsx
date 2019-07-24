import * as React from 'react';

import List from 'components/core/List';
import AppContext from 'components/subjects/contexts/App/context';
import Column from 'components/core/styled/Column';
import Row from 'components/core/styled/Row';
import Branch from 'components/core/Branch';

import ModalWindow from 'components/core/ModalWindow';
import EditDialog from 'components/core/EditDialog';
import InputText from 'components/core/styled/InputText';
import useField from 'hooks/use-field';
import { dateToSQL } from 'helpers/date';
import useListItem from 'hooks/use-list-item';

import Calendar from './Calendar';
import TopToolbar from './TopTollbar';

const AppContent = () => {
  const { checkList, stepperDate } = React.useContext(AppContext);
  const { saveItem, createItem, item, clearItem, isNew } = useListItem(checkList);

  /**
   * Render item check list
   */
  const renderItemCheckList = React.useCallback(
    ([key, { count, planCount }]) => (
      <>
        <div>{key}</div>
        <div>{count}</div>
        <div>{planCount}</div>
      </>
    ),
    [],
  );

  const [countRef, count] = useField();
  const [planCountRef, planCount] = useField();
  const save = React.useCallback(() => {
    const countValue = parseInt(count.getValue(), 10);
    const planCountValue = parseInt(planCount.getValue(), 10);

    if (planCountValue) {
      saveItem({
        count: isNaN(countValue) ? null : countValue,
        planCount: isNaN(planCountValue) ? 0 : planCountValue,
      });
    }
  }, [saveItem, count, planCount]);

  return (
    <Column>
      <TopToolbar />

      <Row justifyContent="center">
        <Row
          style={{
            flexWrap: 'wrap',
            overflowY: 'auto',
            flex: 1,
            padding: '0 16px',
            maxWidth: 1024,
          }}
        >
          <Calendar stepperDate={stepperDate} onClickDate={createItem(date => dateToSQL(date))} />
        </Row>
      </Row>

      <Row justifyContent="center">
        <Row
          style={{
            flexWrap: 'wrap',
            overflowY: 'auto',
            flex: 1,
            padding: '0 16px',
            maxWidth: 1024,
          }}
        >
          <List
            items={checkList[0]}
            style={{ flex: 1, minWidth: '300px' }}
            getItemProps={item => ({
              children: renderItemCheckList(item),
              justifyContent: 'space-between',
            })}
          />
        </Row>
      </Row>

      <Branch value={item[0]}>
        <ModalWindow onClose={clearItem}>
          <EditDialog isNew={isNew()} onCancel={clearItem} onSave={save}>
            <InputText placeholder="Count" ref={countRef} />
            <InputText placeholder="Plan count" ref={planCountRef} />
          </EditDialog>
        </ModalWindow>
      </Branch>
    </Column>
  );
};

export default AppContent;
