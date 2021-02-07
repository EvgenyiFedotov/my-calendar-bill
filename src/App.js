import React from 'react';

import ThemeContext from 'components/subjects/contexts/Theme';
import UserContext from 'components/subjects/contexts/User';
import Auth from 'components/subjects/Auth';
import FirstSetup from 'components/subjects/FirstSetup';
import AppContext from 'components/subjects/contexts/App';
import Content from 'components/subjects/Content';

function App() {
  return (
    <ThemeContext>
      <UserContext>
        <Auth>
          <AppContext>
            <FirstSetup>
              <Content />
            </FirstSetup>
          </AppContext>
        </Auth>
      </UserContext>
    </ThemeContext>
  );
}

export default App;
