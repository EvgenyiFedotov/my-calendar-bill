import * as React from 'react';

import Stepper from '../../core/Stepper';
import Button from '../../styled/Button';
import useStepper from '../../../hooks/use-stepper';
import InputText from '../../styled/InputText';
import useField from '../../../hooks/use-field';
import AppContext from '../../contexts/App/context';
import Calendar from '../../Calendar';
import useSelectedDate from '../../../hooks/use-selected-date';
import { isEqualMonth } from '../../../helpers/date';

import StepContent from './StepContent';

const FirstSetup = () => {
  const {
    lastCheckedCount: [, setCount],
    lastCheckedDate: [, setDate],
  } = React.useContext(AppContext);
  const [step, { prev, next }] = useStepper(0, 1);
  const [countRef, count] = useField();
  const [selectedDate, { isSelectedDate, clickDate }] = useSelectedDate({
    checkClickDate: ({ dateWeek, date }) => isEqualMonth(dateWeek, date),
  });
  const nextToDate = React.useCallback(() => {
    if (count.getValue()) next();
  }, [next, count]);
  const endSetup = React.useCallback(() => {
    if (selectedDate) {
      setCount(count.getValue());
      setDate(selectedDate);
    }
  }, [selectedDate, count, setCount, setDate]);

  return (
    <Stepper step={step}>
      <StepContent title="Current count" buttons={<Button onClick={nextToDate}>Next</Button>}>
        <InputText placeholder="count" type="number" ref={countRef} />
      </StepContent>

      <StepContent
        title="Begin date"
        buttons={
          <>
            <Button onClick={prev}>Prev</Button>
            <Button onClick={endSetup}>End</Button>
          </>
        }
      >
        <Calendar
          getDayProps={params => ({ selected: isSelectedDate(params), onClick: clickDate })}
        />
      </StepContent>
    </Stepper>
  );
};

export default FirstSetup;
