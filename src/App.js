import React from 'react';

import AppContext from 'components/subjects/contexts/App';
import AppStyled from 'components/core/styled/App';
import AppContent from 'components/subjects/AppContent';

import './crypto2';

function App() {
  return (
    <AppContext>
      <AppStyled>
        <AppContent />
      </AppStyled>
    </AppContext>
  );
}

export default App;
