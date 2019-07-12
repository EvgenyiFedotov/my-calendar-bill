import * as React from 'react';

import { getDatesMonths } from '../../../helpers/date';
import Column from '../styled/Column';

import Day from './Day';
import Week from './styled/Week';

/**
 * Component `Calendar`
 * @param {Date} [date=new Date()]
 * @param {(date: Date, index: number) => void} [onClickDay]
 * @param {boolean} [showSixthWeek=true]
 * @param {React.Component} [DayComponent=Day]
 * @param {(dateWeek: Date, date: Date) => PropsDay} [getDayProps=() => {}]
 * @param {(dateWeek: Date, date: Date) => PropsDay} [getDayContent=() => dateWeek.getDate()]
 */
const Calendar = ({
  date = new Date(),
  showSixthWeek = true,
  DayComponent = Day,
  getDayProps,
  getDayContent,
}) => {
  const dates = React.useMemo(() => getDatesMonths(date, { showSixthWeek }), [date, showSixthWeek]);

  const renderWeek = React.useCallback(
    (week, indexWeek) => (
      <Week key={indexWeek}>
        {week.map((dateWeek, indexDateWeek) => {
          const defaultDayProps = {
            indexWeek,
            indexDateWeek,
            dateWeek,
            date,
          };

          return (
            <DayComponent
              {...{
                key: dateWeek.getTime(),
                defaultDayProps,
                getDayProps,
                getDayContent,
              }}
            />
          );
        })}
      </Week>
    ),
    [date, getDayProps, getDayContent],
  );

  return <Column>{dates.map(renderWeek)}</Column>;
};

export default Calendar;
