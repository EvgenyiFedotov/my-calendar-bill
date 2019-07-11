import * as React from 'react';

import StyledAppGlobal from '../styled/AppGlobal';
import Calendar from '../Calendar';
import Row from '../styled/Row';
import Button from '../styled/Button';
import CalendarTrigger from '../CalendarTrigger';
import Column from '../styled/Column';
import ListChangesBill from '../subjects/ListChangesBill';
import AppContext from '../contexts/App/context';
import FirstSetup from '../subjects/FirstSetup';
import Branch from '../core/Branch';
import Modal from '../Modal';
import EditListItem from '../EditListItem';
import InputText from '../styled/InputText';
import List from '../List';

import Styled from './styled';
import DayContent from './DayContent';

const AppContent = () => {
  const { listChecks } = React.useContext(AppContext);
  const [theme, setTheme] = React.useState('white');
  const changeTheme = React.useCallback(
    () =>
      setTheme(prevTheme => {
        switch (prevTheme) {
          case 'dark':
            return 'white';
          default:
            return 'dark';
        }
      }),
    [setTheme],
  );
  const [date, setDate] = React.useState(new Date());
  const isFirstSetup = React.useMemo(() => !listChecks.items.size, [listChecks.items]);

  return (
    <Styled>
      <StyledAppGlobal {...{ theme }} />

      <Branch value={isFirstSetup}>
        <FirstSetup />
      </Branch>

      <Branch value={!isFirstSetup}>
        <Row>
          <Button onClick={changeTheme}>{theme}</Button>
        </Row>

        <Row justifyContent="center">
          <Column alignItems="center">
            <CalendarTrigger {...{ date, setDate }} />
            <Calendar {...{ date, DayComponent: DayContent }} />
          </Column>
          <Column>
            <ListChangesBill />
            <List
              items={listChecks.items}
              getContentItem={([key, { count, planCount }]) => (
                <Row key={key}>
                  <div>{key}</div>
                  <div>{count || 'wait check'}</div>
                  <div>{planCount}</div>
                </Row>
              )}
            />
          </Column>
        </Row>

        <Branch value={!!listChecks.item[0]}>
          <Modal onClose={listChecks.clearItem}>
            <EditListItem
              title="Check date result"
              isNew={listChecks.items.has(!!listChecks.item[0])}
              onCancel={listChecks.clearItem}
            >
              <Column>
                <InputText
                  placeholder="Count"
                  type="number"
                  defaultValue={!!listChecks.item[0] && listChecks.item[1].count}
                />
                <InputText
                  placeholder="Plan count"
                  type="number"
                  defaultValue={!!listChecks.item[0] && listChecks.item[1].planCount}
                  disabled={true}
                />
              </Column>
            </EditListItem>
          </Modal>
        </Branch>
      </Branch>
    </Styled>
  );
};

export default AppContent;
