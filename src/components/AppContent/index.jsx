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

import Styled from './styled';
import DayContent from './DayContent';

const AppContent = () => {
  const {
    lastCheckedCount: [lastCheckedCount],
    lastCheckedDate: [lastCheckedDate],
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
      </Branch>
    </Styled>
  );
};

export default AppContent;
