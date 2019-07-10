import * as React from 'react';

import AppContext from '../../contexts/App/context';
import { isEqualMonth, isEqualDate, isPrevDate, isHoliday, dateToSQL } from '../../../helpers/date';

import Styled from './styled';
import ChangeBill from './styled/ChangeBill';
import CheckResult from './styled/CheckResult';

/**
 * Component `DayContent`
 * @param {Object} defaultDayProps
 */
const DayContent = ({ defaultDayProps }) => {
  const {
    changesBillByType,
    lastCheckedDate: [lastCheckedDate],
    listChecks,
  } = React.useContext(AppContext);
  const { dateWeek, date } = defaultDayProps;
  const dwDate = React.useMemo(() => dateWeek.getDate(), [dateWeek]);
  const clickDate = React.useCallback(() => {
    const dateWeekSQL = dateToSQL(dateWeek);
    if (listChecks.items.has(dateWeekSQL)) {
      listChecks.editItem(dateWeekSQL)();
    } else {
      listChecks.createItem({ count: 100, planCount: 101 }, dateToSQL(dateWeek))();
    }
  }, [listChecks, dateWeek]);
  const checkResult = React.useMemo(() => listChecks.items.get(dateToSQL(dateWeek)), [
    listChecks.items,
    dateWeek,
  ]);

  return (
    <Styled
      prevDate={isPrevDate(dateWeek, lastCheckedDate)}
      holiday={isHoliday(dateWeek)}
      otherMonth={!isEqualMonth(dateWeek, date)}
      onClick={clickDate}
    >
      <CheckResult value={checkResult ? checkResult.count >= checkResult.planCount : undefined}>
        {isEqualDate(dateWeek, lastCheckedDate) ? <b>{dwDate}</b> : dwDate}
      </CheckResult>
      {isEqualMonth(dateWeek, date) && (
        <ChangeBill
          isIn={changesBillByType.in.get(dwDate)}
          isOut={changesBillByType.out.get(dwDate)}
        />
      )}
    </Styled>
  );
};

export default DayContent;
