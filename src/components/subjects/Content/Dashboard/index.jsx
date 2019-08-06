import * as React from 'react';
import { FiLayout, FiSettings, FiLogOut, FiRefreshCcw } from 'react-icons/fi';

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
import TableContext from 'components/subjects/contexts/Tables/context';
import OptionsContext from 'components/subjects/contexts/Options/context';
import Row from 'components/core/styled/Row';
import Separator from 'components/core/styled/Separator';

import DialogFirstCheck from './DialogFirstCheck';
import { getLastCheck } from './heplers';

const Dashboard = () => {
  const { signOut } = React.useContext(UserContext);
  const {
    maps: {
      checksBill: [checksBill],
    },
  } = React.useContext(TableContext);
  const [{ mode }] = React.useContext(OptionsContext);

  const [showContent, setShowContent] = React.useState('dashboard');

  const lastCheck = React.useMemo(() => checksBill && getLastCheck(checksBill, new Date()), [
    checksBill,
  ]);

  return (
    <Styled step={0}>
      <DialogFirstCheck />

      <Top mode={mode}>
        {/* <b>Calendar bill</b> */}
        <Branch value={lastCheck}>
          <>{lastCheck && lastCheck[1].count}</>
        </Branch>
      </Top>

      <Content step={4}>
        <Left mode={mode}>
          <ButtonMenu
            active={'dashboard' === showContent}
            onClick={() => setShowContent('dashboard')}
          >
            <Row>
              <FiLayout />
              <span>Dashboard</span>
            </Row>
          </ButtonMenu>
          <ButtonMenu active={'options' === showContent} onClick={() => setShowContent('options')}>
            <Row>
              <FiSettings />
              <span>Options</span>
            </Row>
          </ButtonMenu>

          <Separator />

          <ButtonMenu onClick={signOut}>
            <Row>
              <FiRefreshCcw />
              <span>Sync data</span>
            </Row>
          </ButtonMenu>

          <ButtonMenu onClick={signOut}>
            <Row>
              <FiLogOut />
              <span>Log out</span>
            </Row>
          </ButtonMenu>
        </Left>

        <Right mode={mode}>
          <Branch value={showContent === 'dashboard'}>
            <DashboardTab />
          </Branch>

          <Branch value={showContent === 'options'}>
            <OptionsTab />
          </Branch>
        </Right>
      </Content>

      <Bottom mode={mode}>
        <Row step={5}>
          <FiLayout
            style={{
              cursor: 'pointer',
              stroke:
                'dashboard' === showContent ? 'var(--text-color)' : 'var(--text-second-color)',
            }}
            onClick={() => setShowContent('dashboard')}
          />
          <FiSettings
            style={{
              cursor: 'pointer',
              stroke: 'options' === showContent ? 'var(--text-color)' : 'var(--text-second-color)',
            }}
            onClick={() => setShowContent('options')}
          />

          <FiRefreshCcw style={{ cursor: 'pointer', stroke: 'var(--text-second-color)' }} />
          <FiLogOut
            style={{ cursor: 'pointer', stroke: 'var(--text-second-color)' }}
            onClick={signOut}
          />
        </Row>
      </Bottom>
    </Styled>
  );
};

export default Dashboard;
