import * as React from 'react';

import GlobalStyled from 'components/core/styled/Global';
import UserContext from 'components/subjects/contexts/User';
import Auth from 'components/subjects/Content/Auth';

const Content = () => (
  <>
    <GlobalStyled />
    <UserContext>
      <Auth />
    </UserContext>
  </>
);

export default Content;
