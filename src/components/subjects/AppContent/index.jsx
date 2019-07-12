import * as React from 'react';

import Calendar from '../../core/Calendar';
import TriggerMonth from '../../core/Calendar/TriggerMonth';
import EditDialog from '../../core/EditDialog';
import ModalWindow from '../../core/ModalWindow';
import List from '../../core/List';
import LabelText from '../../core/LabelText';
import Branch from '../../core/Branch';
import AppContext from '../contexts/App/context';

import Day from './Day';

const AppContent = () => {
  const {
    date: [date, setDate],
    changesBill: { getChangesBillMonth },
  } = React.useContext(AppContext);
  const [showDialog, setShowDialog] = React.useState(false);
  const changesBillMonth = React.useMemo(() => getChangesBillMonth(date), [
    getChangesBillMonth,
    date,
  ]);

  return (
    <>
      <TriggerMonth date={date} onChangeDate={setDate} />
      <Calendar
        date={date}
        ComponentDate={Day}
        getDateProps={() => ({
          onClick: () => setShowDialog(true),
          changesBillMonth,
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
    </>
  );
};

export default AppContent;
