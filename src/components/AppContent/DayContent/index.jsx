import * as React from 'react';

import AppContext from '../../contexts/App/context';
import { isEqualMonth } from '../../../helpers/date';

import ChangeBill from './styled/ChangeBill';

const DayContent = ({ dateWeek, date }) => {
  const {
    changesBill: { items },
  } = React.useContext(AppContext);
  const isOut = React.useMemo(
    () =>
      items.reduce(
        (memo, item) => memo || (item.type === 'out' && dateWeek.getDate() === item.date),
        false,
      ),
    [items, dateWeek],
  );
  const isIn = React.useMemo(
    () =>
      items.reduce(
        (memo, item) => memo || (item.type === 'in' && dateWeek.getDate() === item.date),
        false,
      ),
    [items, dateWeek],
  );

  return (
    <>
      {dateWeek.getDate()}
      {isEqualMonth(dateWeek, date) && <ChangeBill isOut={isOut} isIn={isIn} />}
    </>
  );
};

export default DayContent;
