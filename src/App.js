import React from 'react';

import AppContext from './components/subjects/contexts/App';
import AppGlobalStyled from './components/core/styled/AppGlobal';
import AppStyled from './components/core/styled/App';

import AppContent from './components/subjects/AppContent';
import Button from './components/core/styled/Button';

function App() {
  const [theme, setTheme] = React.useState('white');
  const changeTheme = React.useCallback(
    () => setTheme(prevTheme => (prevTheme === 'white' ? 'black' : 'white')),
    [setTheme],
  );

  return (
    <AppContext>
      <AppGlobalStyled theme={theme} />
      <AppStyled>
        <Button onClick={changeTheme}>Change theme</Button>
        <AppContent />
      </AppStyled>
    </AppContext>
  );
}

export default App;
