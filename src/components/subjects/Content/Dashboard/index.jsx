import * as React from 'react';
import { FiLayout, FiCalendar, FiLogOut } from 'react-icons/fi';

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

  const bold = React.useCallback((value, text) => (value === showContent ? <b>{text}</b> : text), [
    showContent,
  ]);

  return (
    <Styled step={0}>
      <DialogFirstCheck />

      <Top mode={mode}>
        <b>Calendar bill</b>
        <Branch value={lastCheck}>
          <LabelText>{lastCheck && lastCheck[1].count}</LabelText>
        </Branch>
      </Top>

      <Content step={4}>
        <Left mode={mode}>
          <ButtonMenu onClick={() => setShowContent('dashboard')}>
            {bold('dashboard', 'Dashboard')}
          </ButtonMenu>
          <ButtonMenu onClick={() => setShowContent('options')}>
            {bold('options', 'Options')}
          </ButtonMenu>
          <ButtonMenu onClick={signOut}>Log out</ButtonMenu>
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
          <FiLayout style={{ cursor: 'pointer' }} onClick={() => setShowContent('dashboard')} />
          <FiCalendar style={{ cursor: 'pointer' }} onClick={() => setShowContent('options')} />
          <FiLogOut style={{ cursor: 'pointer' }} onClick={signOut} />
        </Row>
      </Bottom>
    </Styled>
  );
};

export default Dashboard;
