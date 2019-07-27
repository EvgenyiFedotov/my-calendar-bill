import * as React from 'react';

import List from 'components/core/List';
import AppContext from 'components/subjects/contexts/App/context';
import Column from 'components/core/styled/Column';
import Branch from 'components/core/Branch';
import PageContent from 'components/core/PageContent';

import ModalWindow from 'components/core/ModalWindow';
import EditDialog from 'components/core/EditDialog';
import InputText from 'components/core/styled/InputText';
import useField from 'hooks/use-field';
import { dateToSQL } from 'helpers/date';
import useMapItem from 'hooks/use-map-item';

import Calendar from './Calendar';
import TopToolbar from './TopTollbar';

const AppContent = () => {
  const {
    checkList,
    stepperDate,
    db: [tables],
  } = React.useContext(AppContext);
  const [data, { save, create, clear, isNew }] = useMapItem(checkList, tables.checkList);

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
  const saveCheckListItem = React.useCallback(() => {
    const countValue = parseInt(count.getValue(), 10);
    const planCountValue = parseInt(planCount.getValue(), 10);

    if (planCountValue) {
      save({
        count: isNaN(countValue) ? null : countValue,
        planCount: isNaN(planCountValue) ? 0 : planCountValue,
      });
    }
  }, [save, count, planCount]);

  return (
    <Column>
      <TopToolbar />

      <PageContent contentProps={{ style: { height: '100vh' } }}>
        <Calendar stepperDate={stepperDate} onClickDate={create(date => dateToSQL(date))} />
        <List
          items={checkList[0]}
          style={{ flex: 1, minWidth: '300px' }}
          getItemProps={item => ({
            children: renderItemCheckList(item),
            justifyContent: 'space-between',
          })}
        />
      </PageContent>

      <Branch value={data[0]}>
        <ModalWindow onClose={clear}>
          <EditDialog isNew={isNew()} onCancel={clear} onSave={saveCheckListItem}>
            <InputText placeholder="Count" ref={countRef} />
            <InputText placeholder="Plan count" ref={planCountRef} />
          </EditDialog>
        </ModalWindow>
      </Branch>
    </Column>
  );
};

export default AppContent;
