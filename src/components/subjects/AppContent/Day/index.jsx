import * as React from 'react';

import AppContext from '../../contexts/App/context';
import { dateToSQL, isPrevDate, isEqualDate } from '../../../../helpers/date';
import Branch from '../../../core/Branch';

import Styled from './styled';
import ChangeBill, { In, Out } from './styled/ChangeBill';
import CheckResult from './styled/CheckResult';

/**
 * Component `Day`
 * @param {Object} changesBillMonth
 */
const Day = props => {
  const {
    changesBill: { getChangesByDirection },
    checkList,
  } = React.useContext(AppContext);
  const { dateWeek, changesBillMonth } = props;
  const dateWeekSQL = React.useMemo(() => dateToSQL(dateWeek), [dateWeek]);
  const changesByDir = React.useMemo(
    () => getChangesByDirection(changesBillMonth.get(dateWeekSQL)),
    [getChangesByDirection, dateWeekSQL, changesBillMonth],
  );
  const check = React.useMemo(() => checkList.items.get(dateWeekSQL), [checkList, dateWeekSQL]);
  const prevDate = React.useMemo(() => isPrevDate(dateWeek, new Date(checkList.firstCheck[0])), [
    dateWeek,
    checkList.firstCheck,
  ]);
  const click = React.useCallback(() => {
    console.log(checkList.getPlanCount(dateWeek));
  }, [checkList, dateWeek]);
  const isToday = React.useMemo(() => isEqualDate(dateWeek, new Date()), [dateWeek]);

  return (
    <Styled {...{ ...props, prevDate }} onClick={click}>
      <CheckResult {...check}>
        <Branch value={isToday}>
          <b>{dateWeek.getDate()}</b>
        </Branch>

        <Branch value={!isToday}>{dateWeek.getDate()}</Branch>
      </CheckResult>

      <Branch value={!prevDate}>
        <ChangeBill>
          <Branch value={changesByDir.in.size}>
            <In />
          </Branch>

          <Branch value={changesByDir.out.size}>
            <Out />
          </Branch>
        </ChangeBill>
      </Branch>
    </Styled>
  );
};

export default Day;
