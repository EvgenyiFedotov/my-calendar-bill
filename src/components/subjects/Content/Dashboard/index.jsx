import * as React from 'react';

import Row from 'components/core/styled/Row';
import Column from 'components/core/styled/Column';
import Content from 'components/core/styled/Content';
import ButtonMenu from 'components/subjects/Content/Dashboard/styled/ButtonMenu';
import Branch from 'components/core/Branch';
import UserContext from 'components/subjects/contexts/User/context';
import Options from 'components/subjects/Content/Dashboard/Options';
import Top from 'components/subjects/Content/Dashboard/Top';

const Dashboard = () => {
  const { signOut } = React.useContext(UserContext);

  const [showContent, setShowContent] = React.useState('dashboard');

  return (
    <Column style={{ height: '100%' }}>
      <Top />

      <Column style={{ height: '100%', overflowY: 'scroll' }}>
        <Content>
          <Row step={2}>
            <Column>
              <ButtonMenu onClick={() => setShowContent('dashboard')}>Dashboard</ButtonMenu>
              <ButtonMenu onClick={() => setShowContent('options')}>Options</ButtonMenu>
              <ButtonMenu onClick={signOut}>Log out</ButtonMenu>
            </Column>

            <Column style={{ flex: 1 }}>
              <Branch value={showContent === 'dashboard'}>
                <div>
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard DashboardDashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard DashboardDashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
                  Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard{' '}
                </div>
              </Branch>

              <Branch value={showContent === 'options'}>
                <Options />
              </Branch>
            </Column>
          </Row>
        </Content>
      </Column>
    </Column>
  );
};

export default Dashboard;
