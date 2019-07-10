import * as React from 'react';

import StyledAppGlobal from '../styled/AppGlobal';
import Calendar from '../Calendar';
import Row from '../styled/Row';
import Button from '../styled/Button';
import CalendarTrigger from '../CalendarTrigger';
import Column from '../styled/Column';
import ListChangesBill from '../subjects/ListChangesBill';

import Styled from './styled';
import DayContent from './DayContent';

const AppContent = () => {
  const [theme, setTheme] = React.useState('dark');
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
  // const getDayContent = React.useCallback(({ dateWeek }) => <>{dateWeek.getDate()}</>, []);

  return (
    <Styled>
      <StyledAppGlobal {...{ theme }} />

      <Row>
        <Button onClick={changeTheme}>{theme}</Button>
      </Row>

      <Row justifyContent="space-between" style={{ height: '100%' }}>
        <Column>
          <CalendarTrigger {...{ date, setDate }} />
          <Calendar {...{ date, getDayContent: DayContent }} />
          <ListChangesBill />
        </Column>
      </Row>
    </Styled>
  );
};

export default AppContent;
