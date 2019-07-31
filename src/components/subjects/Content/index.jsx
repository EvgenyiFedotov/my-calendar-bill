import * as React from 'react';

import GlobalStyled from 'components/core/styled/Global';
import UserContext from 'components/subjects/contexts/User';
import Auth from 'components/subjects/Content/Auth';
import Dashboard from 'components/subjects/Content/Dashboard';
import ThemeContext from 'components/subjects/contexts/Theme/context';
import SelectedDateContext from 'components/subjects/contexts/SelectedDate';
import TablesContext from 'components/subjects/contexts/Tables';

const Content = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <>
      <GlobalStyled theme={theme.data} />
      <UserContext>
        <Auth>
          <SelectedDateContext>
            <TablesContext>
              <Dashboard />
            </TablesContext>
          </SelectedDateContext>
        </Auth>
      </UserContext>
    </>
  );
};

export default Content;
