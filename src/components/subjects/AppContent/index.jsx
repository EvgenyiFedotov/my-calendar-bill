import * as React from 'react';

import Calendar from '../../core/Calendar';
import TriggerMonth from '../../core/Calendar/TriggerMonth';
import EditDialog from '../../core/EditDialog';
import ModalWindow from '../../core/ModalWindow';
import List from '../../core/List';
import LabelText from '../../core/LabelText';
import Branch from '../../core/Branch';
import AppContext from '../contexts/App/context';
import Column from '../../core/styled/Column';

import Day from './Day';

const AppContent = () => {
  const {
    date: [date, setDate],
    changesBill,
    checkList,
  } = React.useContext(AppContext);
  const [showDialog, setShowDialog] = React.useState(false);
  const changesBillMonth = React.useMemo(() => changesBill.getChangesBillMonth(date), [
    changesBill,
    date,
  ]);

  /**
   * Render item changes bill
   */
  const renderItemChangesBill = React.useCallback(
    ([key, { count }]) => (
      <>
        <div>{key}</div>
        <LabelText color={count < 0 ? 'red' : count > 0 ? 'green' : undefined}>{count}</LabelText>
      </>
    ),
    [],
  );

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

  return (
    <Column>
      <TriggerMonth date={date} onChangeDate={setDate} />
      <Calendar
        date={date}
        ComponentDate={Day}
        getDateProps={() => ({
          onClick: () => setShowDialog(true),
          changesBillMonth,
        })}
      />

      <List
        items={changesBill.items}
        style={{ flex: 1 }}
        getItemProps={item => ({
          children: renderItemChangesBill(item),
          justifyContent: 'space-between',
        })}
      />

      <List
        items={checkList.items}
        getItemProps={item => ({
          children: renderItemCheckList(item),
          justifyContent: 'space-between',
        })}
      />

      <Branch value={showDialog}>
        <ModalWindow onClose={() => setShowDialog(false)}>
          <EditDialog title="Edit date" onCancel={() => setShowDialog(false)}>
            <List
              items={new Map([[1, 1], [2, 2], [3, 3]])}
              getItemProps={([, value]) => ({
                children: <LabelText>{value}</LabelText>,
                justifyContent: 'flex-end',
              })}
            />
          </EditDialog>
        </ModalWindow>
      </Branch>
    </Column>
  );
};

export default AppContent;
