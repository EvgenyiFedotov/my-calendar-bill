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

import Day from './Day';

const Calendar = () => {
  const {
    date: [date, { prevMonth, nextMonth, today, setDate }],
    changesBill,
  } = React.useContext(AppContext);
  const changesBillMonth = React.useMemo(() => changesBill.getChangesBillMonth(date), [
    changesBill,
    date,
  ]);
  const [step, stepMethods] = useStepper(0, 1);

  const clickMonth = React.useCallback(() => {
    stepMethods.next();
  }, []);

  const prev = React.useCallback(() => {
    if (step === 0) {
      prevMonth();
    }
  }, [step]);
  const next = React.useCallback(() => {
    if (step === 0) {
      nextMonth();
    }
  }, [step]);
  const nextToday = React.useCallback(() => {
    today();
    stepMethods.setStep(0);
  }, [today]);

  const setDateFromYear = React.useCallback(
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
              onClick: setDateFromYear,
            })}
          />
        </Step>
      </Stepper>
    </Column>
  );
};

export default Calendar;
