import * as React from 'react';

import Column from 'components/core/styled/Column';
import AppContext from 'components/subjects/contexts/App/context';
import TriggerMonth from 'components/core/Calendar/Month/TriggerMonth';
import CalendarMonth from 'components/core/Calendar/Month';
import CalendarYear from 'components/core/Calendar/Year';
import Stepper from 'components/core/Stepper';
import Step from 'components/core/Stepper/Step';
import useStepper from 'hooks/use-stepper';
import { side } from 'components/core/styled/Box';
import CalendarYears from 'components/core/Calendar/Years';

import Day from './Day';

const Calendar = () => {
  const {
    date: [
      date,
      { prevMonth, nextMonth, today, setDate, prevYear, nextYear, prevYears, nextYears },
    ],
    changesBill,
  } = React.useContext(AppContext);
  const changesBillMonth = React.useMemo(() => changesBill.getChangesBillMonth(date), [
    changesBill,
    date,
  ]);
  const [step, stepMethods] = useStepper(2, 2);

  const clickMonth = React.useCallback(() => stepMethods.setStep(step !== 1 ? 1 : 0), [
    stepMethods,
    step,
  ]);

  const clickYear = React.useCallback(() => stepMethods.setStep(step !== 2 ? 2 : 0), [
    stepMethods,
    step,
  ]);

  const prev = React.useCallback(() => {
    if (step === 0) {
      prevMonth();
    } else if (step === 1) {
      prevYear();
    } else if (step === 2) {
      prevYears();
    }
  }, [step]);
  const next = React.useCallback(() => {
    if (step === 0) {
      nextMonth();
    } else if (step === 1) {
      nextYear();
    } else if (step === 2) {
      nextYears();
    }
  }, [step]);
  const nextToday = React.useCallback(() => {
    today();
    stepMethods.setStep(0);
  }, [today]);

  const setDateByDate = React.useCallback(
    date => {
      setDate(date);
      stepMethods.setStep(0);
    },
    [setDate, stepMethods],
  );

  return (
    <Column style={{ width: side(7) }}>
      <TriggerMonth
        date={date}
        onClickPrev={prev}
        onClickNext={next}
        onClickToday={nextToday}
        onClickMonth={clickMonth}
        onClickYear={clickYear}
      />

      <Stepper step={step}>
        <Step>
          <CalendarMonth
            date={date}
            ComponentDate={Day}
            getDateProps={() => ({
              changesBillMonth,
            })}
          />
        </Step>

        <Step>
          <CalendarYear
            date={date}
            getMonthProps={() => ({
              onClick: setDateByDate,
            })}
          />
        </Step>

        <Step>
          <CalendarYears
            date={date}
            getYearProps={() => ({
              onClick: setDateByDate,
            })}
          />
        </Step>
      </Stepper>
    </Column>
  );
};

export default Calendar;
