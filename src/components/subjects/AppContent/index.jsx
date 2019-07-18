import * as React from 'react';

import List from 'components/core/List';
import AppContext from 'components/subjects/contexts/App/context';
import Column from 'components/core/styled/Column';
import Row from 'components/core/styled/Row';
import AppGlobalStyled from 'components/core/styled/AppGlobal';
import Branch from 'components/core/Branch';
import UserContext from 'components/subjects/contexts/User/context';
import Auth from 'components/subjects/AppContent/Auth';

import ModalWindow from 'components/core/ModalWindow';
import EditDialog from 'components/core/EditDialog';
import InputText from 'components/core/styled/InputText';
import useField from 'hooks/use-field';
import { dateToSQL } from 'helpers/date';

import Calendar from './Calendar';
import TopToolbar from './TopTollbar';

const AppContent = () => {
  const {
    checkList,
    stepperDate,
    theme: [theme],
  } = React.useContext(AppContext);
  const {
    key: [key],
  } = React.useContext(UserContext);

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
      checkList.saveItem({
        count: isNaN(countValue) ? null : countValue,
        planCount: isNaN(planCountValue) ? 0 : planCountValue,
      });
    }
  }, [checkList, count, planCount]);

  return (
    <>
      <AppGlobalStyled theme={theme} />

      <Branch value={!key}>
        <Auth />
      </Branch>

      <Branch value={key}>
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
              <Calendar
                stepperDate={stepperDate}
                onClickDate={checkList.createItem(date => dateToSQL(date))}
              />
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
                items={checkList.items}
                style={{ flex: 1, minWidth: '300px' }}
                getItemProps={item => ({
                  children: renderItemCheckList(item),
                  justifyContent: 'space-between',
                })}
              />
            </Row>
          </Row>

          <Branch value={checkList.item[0]}>
            <ModalWindow onClose={checkList.clearItem}>
              <EditDialog isNew={checkList} onCancel={checkList.clearItem} onSave={save}>
                <InputText placeholder="Count" ref={countRef} />
                <InputText placeholder="Plan count" ref={planCountRef} />
              </EditDialog>
            </ModalWindow>
          </Branch>
        </Column>
      </Branch>
    </>
  );
};

export default AppContent;
