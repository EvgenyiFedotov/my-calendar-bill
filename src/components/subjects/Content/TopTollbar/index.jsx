import * as React from 'react';

import Button from 'components/core/styled/Button';
import AppContext from 'components/subjects/contexts/App/context';
import LabelText from 'components/core/LabelText';
import Row from 'components/core/styled/Row';
import Branch from 'components/core/Branch';
import { getLastCheck } from 'components/subjects/contexts/App/helpers';
import UserContext from 'components/subjects/contexts/User/context';
import ThemeContext from 'components/subjects/contexts/Theme/context';
import PageContent from 'components/core/PageContent';
import ChangesBillList from 'components/subjects/Content/ChangesBillList';

import Styled from './styled';

const TopTollbar = () => {
  const { toggleTheme } = React.useContext(ThemeContext);
  const { logout } = React.useContext(UserContext);
  const {
    checkList: [checkList],
  } = React.useContext(AppContext);
  const lastCheck = React.useMemo(() => getLastCheck(checkList, new Date()), [checkList]);
  const count = lastCheck ? lastCheck.item.count : 0;
  const planCount = lastCheck ? lastCheck.item.planCount : 0;
  const [showChangesBill, setShowChangesBill] = React.useState(false);
  const createBill = React.useCallback(() => setShowChangesBill(true), [setShowChangesBill]);
  const hideChBill = React.useCallback(() => setShowChangesBill(false), [setShowChangesBill]);

  return (
    <Styled>
      <PageContent justifyContent="space-between">
        <Row>
          <Button color="var(--bg-color)" onClick={toggleTheme}>
            Change theme
          </Button>

          <Button color="var(--bg-color)" onClick={logout}>
            Log out
          </Button>
        </Row>

        <Row justifyContent="flex-end" alignItems="center">
          <Button color="var(--bg-color)" onClick={createBill}>
            Changes bill
          </Button>
          <LabelText color={count < planCount ? 'red' : 'green'}>
            <b>{count}</b>
          </LabelText>
        </Row>

        <Branch value={showChangesBill}>
          <ChangesBillList onClose={hideChBill} />
        </Branch>
      </PageContent>
    </Styled>
  );
};

export default TopTollbar;
