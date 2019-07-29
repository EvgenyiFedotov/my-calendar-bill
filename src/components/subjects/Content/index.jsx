import * as React from 'react';

import GlobalStyled from 'components/core/styled/Global';
import UserContext from 'components/subjects/contexts/User';
import Auth from 'components/subjects/Content/Auth';
import Dashboard from 'components/subjects/Content/Dashboard';
import ThemeContext from 'components/subjects/contexts/Theme/context';

const Content = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <>
      <GlobalStyled theme={theme.data} />
      <UserContext>
        <Auth>
          <Dashboard />
        </Auth>
      </UserContext>
    </>
  );
};

export default Content;
