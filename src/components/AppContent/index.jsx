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

import Styled from './styled';
import DayContent from './DayContent';

const AppContent = () => {
  const {
    lastCheckedCount: [lastCheckedCount],
    lastCheckedDate: [lastCheckedDate],
    listChecks,
  } = React.useContext(AppContext);
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
  const isFirstSetup = React.useMemo(
    () => lastCheckedCount === undefined || lastCheckedDate === undefined,
    [lastCheckedCount, lastCheckedDate],
  );

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

        <Column alignItems="center">
          <Row alignItems="center" style={{ fontSize: 'calc(var(--space) * 3)' }}>
            Count: <b>{lastCheckedCount}</b>
          </Row>
          <CalendarTrigger {...{ date, setDate }} />
          <Calendar {...{ date, DayComponent: DayContent }} />
          <ListChangesBill />
        </Column>

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
