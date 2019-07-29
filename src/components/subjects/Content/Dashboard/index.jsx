import * as React from 'react';

import Page, { Content } from 'components/core/styled/Page';
import Row from 'components/core/styled/Row';
import Column from 'components/core/styled/Column';
import ButtonMenu from 'components/subjects/Content/Dashboard/styled/ButtonMenu';
import { BlockRow } from 'components/core/styled/Block';
import Branch from 'components/core/Branch';
import UserContext from 'components/subjects/contexts/User/context';

const Dashboard = () => {
  const { signOut } = React.useContext(UserContext);

  const [showContent, setShowContent] = React.useState('dashboard');

  return (
    <Page>
      <Content>
        <Row step={2}>
          <Column>
            <ButtonMenu onClick={() => setShowContent('dashboard')}>Dashboard</ButtonMenu>
            <ButtonMenu onClick={() => setShowContent('options')}>Options</ButtonMenu>
            <ButtonMenu onClick={signOut}>Log out</ButtonMenu>
          </Column>

          <Column style={{ flex: 1 }}>
            <Branch value={showContent === 'dashboard'}>
              <BlockRow>Dashboard</BlockRow>
            </Branch>

            <Branch value={showContent === 'options'}>
              <BlockRow>Options</BlockRow>
            </Branch>
          </Column>
        </Row>
      </Content>
    </Page>
  );
};

export default Dashboard;
