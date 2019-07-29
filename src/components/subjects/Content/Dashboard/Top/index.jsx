import * as React from 'react';

import Content from 'components/core/styled/Content';
import UserContext from 'components/subjects/contexts/User/context';

import Styled from './styled';

const Top = () => {
  const user = React.useContext(UserContext);

  return (
    <Styled>
      <Content>{user.data.login}</Content>
    </Styled>
  );
};

export default Top;
