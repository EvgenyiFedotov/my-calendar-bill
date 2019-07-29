import * as React from 'react';

import Page, { Content } from 'components/core/styled/Page';
import Row from 'components/core/styled/Row';
import Column from 'components/core/styled/Column';
import ButtonMenu from 'components/subjects/Content/Dashboard/styled/ButtonMenu';
import { BlockRow } from 'components/core/styled/Block';

const Dashboard = () => {
  return (
    <Page>
      <Content>
        <Row step={2}>
          <Column>
            <ButtonMenu>Dashboard</ButtonMenu>
            <ButtonMenu>Options</ButtonMenu>
            <ButtonMenu>Log out</ButtonMenu>
          </Column>

          <Column style={{ flex: 1 }}>
            <BlockRow>Dashboard</BlockRow>
            <BlockRow>Dashboard</BlockRow>
            <BlockRow>Dashboard</BlockRow>
          </Column>
        </Row>
      </Content>
    </Page>
  );
};

export default Dashboard;
