import React from 'react';

import AppContext from 'components/subjects/contexts/App';
import AppStyled from 'components/core/styled/App';
import AppContent from 'components/subjects/AppContent';

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
