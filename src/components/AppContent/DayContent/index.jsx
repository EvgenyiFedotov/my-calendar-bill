import * as React from 'react';

import AppContext from '../../contexts/App/context';
import {
  isEqualMonth,
  isEqualDate,
  isPrevDate,
  isHoliday,
  dateToSQL,
  eachDate,
} from '../../../helpers/date';

import Styled from './styled';
import ChangeBill from './styled/ChangeBill';
import CheckResult from './styled/CheckResult';

/**
 * Component `DayContent`
 * @param {Object} defaultDayProps
 */
const DayContent = ({ defaultDayProps }) => {
  const { changesBillByType, listChecks, getPlanCount } = React.useContext(AppContext);
  const { dateWeek, date } = defaultDayProps;
  const dwDate = React.useMemo(() => dateWeek.getDate(), [dateWeek]);
  const clickDate = React.useCallback(() => {
    const dateWeekSQL = dateToSQL(dateWeek);

    if (listChecks.items.has(dateWeekSQL)) {
      // listChecks.editItem(dateWeekSQL)();
    } else {
      const planCount = getPlanCount(new Date(dateWeek));

      if (typeof planCount === 'number') {
        listChecks.saveItem({ count: null, planCount }, dateToSQL(dateWeek));
        // listChecks.createItem({ count: null, planCount: 101 }, dateToSQL(dateWeek))();
      }
    }
  }, [listChecks, dateWeek]);

  // Get is prev date
  const dwIsPrevDate = React.useMemo(
    () => isPrevDate(dateWeek, new Date(Array.from(listChecks.items)[0][0])),
    [dateWeek, listChecks],
  );

  // Get value check result
  const valueCheckResult = React.useMemo(() => {
    const check = listChecks.items.get(dateToSQL(dateWeek));

    if (check && check.show !== false) {
      return typeof check.count === 'number' ? check.count >= check.planCount : null;
    }
  }, [listChecks, dateWeek]);

  return (
    <Styled
      prevDate={dwIsPrevDate}
      holiday={isHoliday(dateWeek)}
      otherMonth={!isEqualMonth(dateWeek, date)}
      onClick={clickDate}
    >
      <CheckResult value={valueCheckResult}>
        {isEqualDate(dateWeek, new Date()) ? <b>{dwDate}</b> : dwDate}
      </CheckResult>

      <ChangeBill
        isIn={!dwIsPrevDate ? changesBillByType.in.get(dwDate) !== undefined : undefined}
        isOut={!dwIsPrevDate ? changesBillByType.out.get(dwDate) !== undefined : undefined}
      />
    </Styled>
  );
};

export default DayContent;
