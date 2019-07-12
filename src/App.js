import React from 'react';

import AppContext from './components/contexts/App';
import AppGlobalStyled from './components/core/styled/AppGlobal';
import AppStyled from './components/core/styled/App';
import Calendar from './components/core/Calendar';

function App() {
  return (
    <AppContext>
      <AppGlobalStyled theme="white" />
      <AppStyled>
        <Calendar />
      </AppStyled>
    </AppContext>
  );
}

export default App;
