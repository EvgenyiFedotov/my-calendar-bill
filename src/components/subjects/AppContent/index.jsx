import * as React from 'react';

import List from 'components/core/List';
import AppContext from 'components/subjects/contexts/App/context';
import Column from 'components/core/styled/Column';
import Row from 'components/core/styled/Row';

import Calendar from './Calendar';
import TopToolbar from './TopTollbar';

const AppContent = () => {
  const { checkList } = React.useContext(AppContext);

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
        <Calendar />

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
