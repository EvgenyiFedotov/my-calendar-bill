import * as React from 'react';

import { getDatesMonths } from 'helpers/date';
import Column from 'components/core/styled/Column';

import Day from './Day';
import Week from './styled/Week';

/**
 * Component `Calendar`
 * @param {Date} [date=new Date()]
 * @param {(date: Date, index: number) => void} [onClickDay]
 * @param {boolean} [showSixthWeek=true]
 * @param {React.Component} [ComponentDate=Day]
 * @param {(props: dateWeekProps) => void} [getDateProps=() => {}]
 */
const Calendar = ({
  date = new Date(),
  showSixthWeek = true,
  ComponentDate = Day,
  getDateProps = () => {},
}) => {
  const dates = React.useMemo(() => getDatesMonths(date, { showSixthWeek }), [date, showSixthWeek]);

  const renderWeek = React.useCallback(
    (week, indexWeek) => (
      <Week key={indexWeek}>
        {week.map((dateWeek, indexDateWeek) => {
          const dateWeekProps = {
            indexWeek,
            indexDateWeek,
            dateWeek,
            date,
          };
          return (
            <ComponentDate
              key={dateWeek.getTime()}
              {...dateWeekProps}
              {...getDateProps(dateWeekProps)}
            />
          );
        })}
      </Week>
    ),
    [date, getDateProps],
  );

  return <Column>{dates.map(renderWeek)}</Column>;
};

export default Calendar;
