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
import DashboardTab from 'components/subjects/Content/Dashboard/tabs/Dashboard';
import OptionsTab from 'components/subjects/Content/Dashboard/tabs/Options';
import LabelText from 'components/core/styled/LabelText';

import DialogFirstCheck from './DialogFirstCheck';

const Dashboard = () => {
  const { signOut } = React.useContext(UserContext);

  const [showContent, setShowContent] = React.useState('dashboard');

  const bold = React.useCallback((value, text) => (value === showContent ? <b>{text}</b> : text), [
    showContent,
  ]);

  return (
    <Styled step={0}>
      <DialogFirstCheck />

      <Top>
        <b>Calendar bill</b>
        <LabelText>1000</LabelText>
      </Top>

      <Content step={4}>
        <Left>
          <ButtonMenu onClick={() => setShowContent('dashboard')}>
            {bold('dashboard', 'Dashboard')}
          </ButtonMenu>
          <ButtonMenu onClick={() => setShowContent('options')}>
            {bold('options', 'Options')}
          </ButtonMenu>
          <ButtonMenu onClick={signOut}>Log out</ButtonMenu>
        </Left>

        <Right>
          <Branch value={showContent === 'dashboard'}>
            <DashboardTab />
          </Branch>

          <Branch value={showContent === 'options'}>
            <OptionsTab />
          </Branch>
        </Right>
      </Content>

      <Bottom />
    </Styled>
  );
};

export default Dashboard;
