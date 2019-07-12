import * as React from 'react';

import AppContext from '../../contexts/App/context';
import { dateToSQL } from '../../../../helpers/date';
import Branch from '../../../core/Branch';

import Styled from './styled';
import ChangeBill, { In, Out } from './styled/ChangeBill';

/**
 * Component `Day`
 * @param {Object} changesBillMonth
 */
const Day = props => {
  const {
    changesBill: { getChangesByDirection },
  } = React.useContext(AppContext);
  const { dateWeek, changesBillMonth } = props;
  const changesByDir = React.useMemo(
    () => getChangesByDirection(changesBillMonth.get(dateToSQL(dateWeek))),
    [getChangesByDirection, dateWeek, changesBillMonth],
  );

  return (
    <Styled {...props} prevDate={true}>
      {dateWeek.getDate()}

      <ChangeBill>
        <Branch value={changesByDir.in.size}>
          <In />
        </Branch>

        <Branch value={changesByDir.out.size}>
          <Out />
        </Branch>
      </ChangeBill>
    </Styled>
  );
};

export default Day;
