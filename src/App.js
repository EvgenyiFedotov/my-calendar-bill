import React from 'react';

import AppContext from './components/contexts/App';
import AppContent from './components/AppContent';

function App() {
  return (
    <AppContext>
      <AppContent />
    </AppContext>
  );
}

export default App;
