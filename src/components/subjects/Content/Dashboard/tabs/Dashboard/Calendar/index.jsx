import * as React from 'react';

import { getDatesMonths, DAY_WEEK_SHORT, MONTHS, isEqualMonth, isEqualDate } from 'helpers/date';
import SelectedDateContext from 'components/subjects/contexts/SelectedDate/context';
import Day from 'components/subjects/Content/Dashboard/tabs/Dashboard/Calendar/styled/Day';
import Column from 'components/core/styled/Column';
import Row from 'components/core/styled/Row';
import Block from 'components/core/styled/Block';

const Calendar = () => {
  const [selectedDate, { prevMonth, nextMonth, setDate }] = React.useContext(SelectedDateContext);
  const dates = React.useMemo(() => getDatesMonths(selectedDate), [selectedDate]);

  const clickDate = React.useCallback(
    date => () => isEqualMonth(selectedDate, date) && setDate(new Date(date)),
    [selectedDate, setDate],
  );

  return (
    <Column>
      <Row>
        <Day onClick={prevMonth}>P</Day>
        <Block
          width={1.5 * 5}
          height={1.5}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {MONTHS[selectedDate.getMonth()]} {selectedDate.getFullYear()}
        </Block>
        <Day onClick={nextMonth}>N</Day>
      </Row>

      <Row>
        {DAY_WEEK_SHORT.map(day => (
          <Day key={`key-${day}`} style={{ color: '#bdbdbd' }}>
            {day}
          </Day>
        ))}
      </Row>

      {dates.map((week, indexWeek) => (
        <Row key={`week-${indexWeek}`}>
          {week.map((date, indexDate) => (
            <Day key={`day-${indexDate}`} onClick={clickDate(date)}>
              {(() => {
                let result = isEqualMonth(selectedDate, date) ? date.getDate() : '';
                if (isEqualDate(selectedDate, date)) result = <b>{result}</b>;
                return result;
              })()}
            </Day>
          ))}
        </Row>
      ))}
    </Column>
  );
};

export default Calendar;
