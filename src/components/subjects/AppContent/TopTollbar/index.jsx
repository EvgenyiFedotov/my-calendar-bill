import * as React from 'react';

import Button from 'components/core/styled/Button';
import AppContext from 'components/subjects/contexts/App/context';
import LabelText from 'components/core/LabelText';
import Row from 'components/core/styled/Row';
import Branch from 'components/core/Branch';
import { getLastCheck } from 'components/subjects/contexts/App/helpers';

import Styled from './styled';
import ChangesBillList from './ChangesBillList';

const TopTollbar = () => {
  const {
    theme: [, { toggleTheme }],
    checkList,
  } = React.useContext(AppContext);
  const lastCheck = React.useMemo(() => getLastCheck(checkList, new Date()), [checkList]);
  const count = lastCheck ? lastCheck.item.count : 0;
  const planCount = lastCheck ? lastCheck.item.planCount : 0;
  const [showChangesBill, setShowChangesBill] = React.useState(false);
  const createBill = React.useCallback(() => setShowChangesBill(true), [setShowChangesBill]);
  const hideChBill = React.useCallback(() => setShowChangesBill(false), [setShowChangesBill]);

  return (
    <Styled>
      <Button color="var(--bg-color)" onClick={toggleTheme}>
        Change theme
      </Button>

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
    </Styled>
  );
};

export default TopTollbar;
