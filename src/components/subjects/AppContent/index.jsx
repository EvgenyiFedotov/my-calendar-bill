import * as React from 'react';

import List from 'components/core/List';
import AppContext from 'components/subjects/contexts/App/context';
import Column from 'components/core/styled/Column';
import Row from 'components/core/styled/Row';
import AppGlobalStyled from 'components/core/styled/AppGlobal';
import Branch from 'components/core/Branch';
import UserContext from 'components/subjects/contexts/User/context';
import Auth from 'components/subjects/AppContent/Auth';

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

  console.log('key', key);

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
              <Calendar stepperDate={stepperDate} />
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
      </Branch>
    </>
  );
};

export default AppContent;
