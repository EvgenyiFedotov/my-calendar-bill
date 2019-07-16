import * as React from 'react';

import useStepper from 'hooks/use-stepper';

/**
 * @param {ReturtUseDate} date
 */
export default ([
  date,
  {
    prevMonth, nextMonth, today, setDate, prevYear, nextYear, prevYears, nextYears,
  },
]) => {
  const [step, stepMethods] = useStepper(0, 2);

  const clickMonth = React.useCallback(() => stepMethods.setStep(step !== 1 ? 1 : 0), [
    stepMethods,
    step,
  ]);

  const clickYear = React.useCallback(() => stepMethods.setStep(step !== 2 ? 2 : 0), [
    stepMethods,
    step,
  ]);

  const clickToday = React.useCallback(() => {
    today();
    stepMethods.setStep(0);
  }, [today, stepMethods]);

  const prevDate = React.useCallback(() => {
    if (step === 0) {
      prevMonth();
    } else if (step === 1) {
      prevYear();
    } else if (step === 2) {
      prevYears();
    }
  }, [step, prevMonth, prevYear, prevYears]);

  const nextDate = React.useCallback(() => {
    if (step === 0) {
      nextMonth();
    } else if (step === 1) {
      nextYear();
    } else if (step === 2) {
      nextYears();
    }
  }, [step, nextMonth, nextYear, nextYears]);

  const setDateWithStep = React.useCallback(
    (nextStep = 0) => (date) => {
      setDate(date);
      stepMethods.setStep(nextStep);
    },
    [setDate, stepMethods],
  );

  return [
    date,
    step,
    {
      clickMonth,
      clickYear,
      clickToday,
      prevDate,
      nextDate,
      setDateWithStep,
    },
  ];
};
