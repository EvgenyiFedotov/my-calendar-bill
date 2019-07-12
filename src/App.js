import React from 'react';

import AppContext from './components/subjects/contexts/App';
import AppGlobalStyled from './components/core/styled/AppGlobal';
import AppStyled from './components/core/styled/App';

import Calendar from './components/core/Calendar';
import TriggerMonth from './components/core/Calendar/TriggerMonth';
import EditWindow from './components/core/EditWindow';

function App() {
  const [date, setDate] = React.useState(new Date());

  return (
    <AppContext>
      <AppGlobalStyled theme="white" />
      <AppStyled>
        <TriggerMonth date={date} onChangeDate={setDate} />
        <Calendar date={date} />
        <EditWindow />
      </AppStyled>
    </AppContext>
  );
}

export default App;
