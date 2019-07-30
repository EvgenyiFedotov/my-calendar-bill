import * as React from 'react';

import UserContext from 'components/subjects/contexts/User/context';
import Styled from 'components/subjects/Content/Dashboard/styled';
import Top from 'components/subjects/Content/Dashboard/styled/Top';
import Content from 'components/subjects/Content/Dashboard/styled/Content';
import Left from 'components/subjects/Content/Dashboard/styled/Left';
import Right from 'components/subjects/Content/Dashboard/styled/Right';
import Bottom from 'components/subjects/Content/Dashboard/styled/Bottom';
import ButtonMenu from 'components/subjects/Content/Dashboard/styled/ButtonMenu';
import Branch from 'components/core/Branch';
import Options from 'components/subjects/Content/Dashboard/Options';

const Dashboard = () => {
  const { signOut } = React.useContext(UserContext);

  const [showContent, setShowContent] = React.useState('dashboard');

  return (
    <Styled step={0}>
      <Top>Top</Top>

      <Content step={2}>
        <Left>
          <ButtonMenu onClick={() => setShowContent('dashboard')}>Dashboard</ButtonMenu>
          <ButtonMenu onClick={() => setShowContent('options')}>Options</ButtonMenu>
          <ButtonMenu onClick={signOut}>Log out</ButtonMenu>
        </Left>

        <Right>
          <Branch value={showContent === 'dashboard'}>
            <b>Dashboard</b>
          </Branch>

          <Branch value={showContent === 'options'}>
            <Options />
          </Branch>
        </Right>
      </Content>

      <Bottom />
    </Styled>
  );
};

export default Dashboard;
