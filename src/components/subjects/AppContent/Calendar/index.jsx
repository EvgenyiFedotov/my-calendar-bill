import * as React from 'react';

import Column from 'components/core/styled/Column';
import AppContext from 'components/subjects/contexts/App/context';
import TriggerMonth from 'components/core/Calendar/Month/TriggerMonth';
import CalendarMonth from 'components/core/Calendar/Month';
import CalendarYear from 'components/core/Calendar/Year';
import Stepper from 'components/core/Stepper';
import Step from 'components/core/Stepper/Step';
import { side } from 'components/core/styled/Box';
import CalendarYears from 'components/core/Calendar/Years';
import useSelectedDate from 'hooks/use-selected-date';

import Day from './Day';

/**
 * Component `Calendar`
 * @param {ReturtUseDate} date
 */
const Calendar = ({ date: [date] }) => {
  const {
    changesBill,
    stepperDate: [step, { clickMonth, clickYear, clickToday, prevDate, nextDate, setDateWithStep }],
  } = React.useContext(AppContext);
  const changesBillMonth = React.useMemo(() => changesBill.getChangesBillMonth(date), [
    changesBill,
    date,
  ]);
  const [, { setSelectedDate, isSelectedDate }] = useSelectedDate(new Date());

  return (
    <Column style={{ width: side(7) }}>
      <TriggerMonth
        date={date}
        onClickPrev={prevDate}
        onClickNext={nextDate}
        onClickToday={clickToday}
        onClickMonth={clickMonth}
        onClickYear={clickYear}
      />

      <Stepper step={step}>
        <Step>
          <CalendarMonth
            date={date}
            ComponentDate={Day}
            getDateProps={({ dateWeek }) => ({
              changesBillMonth,
              onClick: setSelectedDate,
              selected: isSelectedDate(dateWeek),
            })}
          />
        </Step>

        <Step>
          <CalendarYear
            date={date}
            getMonthProps={() => ({
              onClick: setDateWithStep(),
            })}
          />
        </Step>

        <Step>
          <CalendarYears
            date={date}
            getYearProps={() => ({
              onClick: setDateWithStep(1),
            })}
          />
        </Step>
      </Stepper>
    </Column>
  );
};

export default Calendar;
