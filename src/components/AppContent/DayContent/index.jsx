import * as React from 'react';

import AppContext from '../../contexts/App/context';
import { isEqualMonth, isEqualDate, isPrevDate, isHoliday } from '../../../helpers/date';

import Styled from './styled';
import ChangeBill from './styled/ChangeBill';
import CheckResult from './styled/CheckResult';

const DayContent = ({ defaultDayProps }) => {
  const {
    changesBill: { items },
    lastCheckedDate: [lastCheckedDate],
  } = React.useContext(AppContext);
  const { dateWeek, date } = defaultDayProps;
  const dwDate = React.useMemo(() => dateWeek.getDate(), [dateWeek]);
  const isOut = React.useMemo(
    () =>
      items.reduce((memo, item) => memo || (item.type === 'out' && dwDate === item.date), false),
    [items, dwDate],
  );
  const isIn = React.useMemo(
    () => items.reduce((memo, item) => memo || (item.type === 'in' && dwDate === item.date), false),
    [items, dwDate],
  );

  return (
    <Styled
      prevDate={isPrevDate(dateWeek, lastCheckedDate)}
      holiday={isHoliday(dateWeek)}
      otherMonth={!isEqualMonth(dateWeek, date)}
    >
      <CheckResult>{isEqualDate(dateWeek, lastCheckedDate) ? <b>{dwDate}</b> : dwDate}</CheckResult>
      {isEqualMonth(dateWeek, date) && <ChangeBill isOut={isOut} isIn={isIn} />}
    </Styled>
  );
};

export default DayContent;
