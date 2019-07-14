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
import Row from '../../core/styled/Row';

import Day from './Day';
import TopToolbar from './TopTollbar';

const AppContent = () => {
  const {
    date: [date, setDate],
    changesBill,
    checkList,
  } = React.useContext(AppContext);
  const changesBillMonth = React.useMemo(() => changesBill.getChangesBillMonth(date), [
    changesBill,
    date,
  ]);

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
      <TopToolbar />

      <Row style={{ flexWrap: 'wrap' }}>
        <Column>
          <TriggerMonth date={date} onChangeDate={setDate} />
          <Calendar
            date={date}
            ComponentDate={Day}
            getDateProps={() => ({
              changesBillMonth,
            })}
          />
        </Column>

        <List
          items={checkList.items}
          style={{ flex: 1, minWidth: '300px' }}
          getItemProps={item => ({
            children: renderItemCheckList(item),
            justifyContent: 'space-between',
          })}
        />
      </Row>
    </Column>
  );
};

export default AppContent;
