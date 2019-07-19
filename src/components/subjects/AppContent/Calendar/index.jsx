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
import { isEqualDate } from 'helpers/date';
import { getChangesBillMonth } from 'components/subjects/contexts/App/helpers';

import Day from './Day';

/**
 * Component `Calendar`
 * @param {ReturnUseStepperDate} stepperDate
 * @param {Date} [selectedDate]
 * @param {(date: Date) => void} [onClickDate]
 */
const Calendar = ({
  stepperDate: [
    date,
    step,
    { clickMonth, clickYear, clickToday, prevDate, nextDate, setDateWithStep },
  ],
  selectedDate,
  onClickDate,
}) => {
  const {
    changesBill: [changesBill],
  } = React.useContext(AppContext);
  const changesBillMonth = React.useMemo(() => getChangesBillMonth(changesBill, date), [
    changesBill,
    date,
  ]);

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
              onClick: onClickDate,
              selected: selectedDate ? isEqualDate(selectedDate, dateWeek) : undefined,
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
