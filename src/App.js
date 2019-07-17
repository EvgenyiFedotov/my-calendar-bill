import React from 'react';

import UserContext from 'components/subjects/contexts/User';
import AppContext from 'components/subjects/contexts/App';
import AppStyled from 'components/core/styled/App';
import AppContent from 'components/subjects/AppContent';

import './crypto2';

function App() {
  return (
    <UserContext>
      <AppContext>
        <AppStyled>
          <AppContent />
        </AppStyled>
      </AppContext>
    </UserContext>
  );
}

export default App;
