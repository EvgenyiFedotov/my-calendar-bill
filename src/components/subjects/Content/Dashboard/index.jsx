import * as React from 'react';

import UserContext from 'components/subjects/contexts/User/context';
import Styled from 'components/subjects/Content/Dashboard/styled';
import Top from 'components/subjects/Content/Dashboard/styled/Top';
import Content from 'components/subjects/Content/Dashboard/styled/Content';
import Left from 'components/subjects/Content/Dashboard/styled/Left';
import Right from 'components/subjects/Content/Dashboard/styled/Right';
import Bottom from 'components/subjects/Content/Dashboard/styled/Bottom';
import Row from 'components/core/styled/Row';

const Dashboard = () => {
  const { signOut } = React.useContext(UserContext);

  const [showContent, setShowContent] = React.useState('dashboard');

  return (
    <Styled step={0}>
      <Top />
      <Content step={2}>
        <Left>Dashboard</Left>
        <Right>
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
          Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard{' '}
        </Right>
      </Content>
      <Bottom />
    </Styled>
  );
};

export default Dashboard;
