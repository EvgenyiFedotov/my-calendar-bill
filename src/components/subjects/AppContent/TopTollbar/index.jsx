import * as React from 'react';

import Button from '../../../core/styled/Button';
import AppContext from '../../contexts/App/context';
import LabelText from '../../../core/LabelText';
import Row from '../../../core/styled/Row';
import ModalWindow from '../../../core/ModalWindow';
import Branch from '../../../core/Branch';

import Styled from './styled';
import ChangesBillList from './ChangesBillList';

const TopTollbar = () => {
  const {
    theme: [, { toggleTheme }],
    checkList,
  } = React.useContext(AppContext);
  const [, { count, planCount }] = React.useMemo(() => checkList.getLastCheck(new Date()), [
    checkList,
  ]);
  const [showChangesBill, setShowChangesBill] = React.useState(false);
  const showChBill = React.useCallback(() => setShowChangesBill(true), [setShowChangesBill]);
  const hideChBill = React.useCallback(() => setShowChangesBill(false), [setShowChangesBill]);

  return (
    <Styled>
      <Button color="var(--bg-color)" onClick={toggleTheme}>
        Change theme
      </Button>

      <Row justifyContent="flex-end" alignItems="center">
        <Button color="var(--bg-color)" onClick={showChBill}>
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
