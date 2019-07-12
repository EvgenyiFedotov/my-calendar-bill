import React from 'react';

import AppContext from './components/contexts/App';
import AppGlobalStyled from './components/core/styled/AppGlobal';
import AppStyled from './components/core/styled/App';

import Calendar from './components/core/Calendar';
import TriggerMonth from './components/core/Calendar/TriggerMonth';

function App() {
  const [date, setDate] = React.useState(new Date());

  return (
    <AppContext>
      <AppGlobalStyled theme="white" />
      <AppStyled>
        <TriggerMonth date={date} onChangeDate={setDate} />
        <Calendar date={date} />
      </AppStyled>
    </AppContext>
  );
}

export default App;
