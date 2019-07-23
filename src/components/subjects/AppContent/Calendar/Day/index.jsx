import * as React from 'react';

import AppContext from 'components/subjects/contexts/App/context';
import { dateToSQL, isPrevDate, isEqualDate } from 'helpers/date';
import Branch from 'components/core/Branch';
import { getChangesByDirection } from 'components/subjects/contexts/App/helpers';

import Styled from './styled';
import ChangeBill, { In, Out } from './styled/ChangeBill';
import CheckResult from './styled/CheckResult';

/**
 * Component `Day`
 * @param {Object} changesBillMonth
 * @param {(date: Date) => void} [onClick = () => {}]
 */
const Day = props => {
  const {
    checkList: [checkList],
  } = React.useContext(AppContext);
  const { dateWeek, changesBillMonth, onClick = () => {} } = props;
  const dateWeekSQL = React.useMemo(() => dateToSQL(dateWeek), [dateWeek]);
  const changesByDir = React.useMemo(
    () => getChangesByDirection(changesBillMonth.get(dateWeekSQL)),
    [dateWeekSQL, changesBillMonth],
  );
  const check = React.useMemo(() => checkList.get(dateWeekSQL), [checkList, dateWeekSQL]);
  const prevDate = React.useMemo(
    () => (checkList.size ? isPrevDate(dateWeek, new Date(Array.from(checkList)[0][0])) : true),
    [dateWeek, checkList],
  );
  const isToday = React.useMemo(() => isEqualDate(dateWeek, new Date()), [dateWeek]);
  const click = React.useCallback(() => {
    // console.log('Plan count:', checkList.getPlanCount(dateWeek));
    !prevDate && onClick(dateWeek);
  }, [prevDate, onClick, dateWeek]);

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
