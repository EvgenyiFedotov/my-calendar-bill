import * as React from 'react';

import List from 'components/core/List';
import AppContext from 'components/subjects/contexts/App/context';
import Column from 'components/core/styled/Column';
import Row from 'components/core/styled/Row';
import useSelectedDate from 'hooks/use-selected-date';

import Calendar from './Calendar';
import TopToolbar from './TopTollbar';

const AppContent = () => {
  const { checkList, stepperDate } = React.useContext(AppContext);
  const selectedDate = useSelectedDate(new Date());

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
          <Calendar stepperDate={stepperDate} selectedDate={selectedDate} />
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
    </Column>
  );
};

export default AppContent;
