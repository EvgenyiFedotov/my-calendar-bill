import * as React from 'react';

import Stepper from '../../core/Stepper';
import Button from '../../styled/Button';
import useStepper from '../../../hooks/use-stepper';
import InputText from '../../styled/InputText';
import CaledarNumbers from '../CalendarNumbers';
import useField from '../../../hooks/use-field';
import AppContext from '../../contexts/App/context';

import StepContent from './StepContent';

const FirstSetup = () => {
  const {
    lastCheckedCount: [, setCount],
    lastCheckedDate: [, setDate],
  } = React.useContext(AppContext);
  const [step, { prev, next }] = useStepper(0, 1);
  const [countRef, count] = useField();
  const [dateRef, date] = useField({ getValueRef: ref => ref.current.getSelectedDate() });
  const nextToDate = React.useCallback(() => {
    if (count.getValue()) next();
  }, [next]);
  const endSetup = React.useCallback(() => {
    if (date.getValue()) {
      setCount(count.getValue());
      setDate(date.getValue());
    }
  }, []);

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
        <CaledarNumbers ref={dateRef} defaultSelectedDate={new Date().getDate()} />
      </StepContent>
    </Stepper>
  );
};

export default FirstSetup;
