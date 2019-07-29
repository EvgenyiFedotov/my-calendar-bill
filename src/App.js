import React from 'react';

import ThemeContext from 'components/subjects/contexts/Theme';
import Content from 'components/subjects/Content';

function App() {
  return (
    <ThemeContext>
      <Content />
    </ThemeContext>
  );
}

export default App;
