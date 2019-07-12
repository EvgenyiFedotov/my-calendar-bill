import React from 'react';

import AppContext from './components/subjects/contexts/App';
import AppGlobalStyled from './components/core/styled/AppGlobal';
import AppStyled from './components/core/styled/App';

import AppContent from './components/subjects/AppContent';

function App() {
  return (
    <AppContext>
      <AppGlobalStyled theme="white" />
      <AppStyled>
        <AppContent />
      </AppStyled>
    </AppContext>
  );
}

export default App;
