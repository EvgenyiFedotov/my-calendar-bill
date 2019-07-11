import * as React from 'react';

import Stepper from '../../core/Stepper';
import Button from '../../styled/Button';
import useStepper from '../../../hooks/use-stepper';
import InputText from '../../styled/InputText';
import useField from '../../../hooks/use-field';
import AppContext from '../../contexts/App/context';
import { dateToSQL } from '../../../helpers/date';

import StepContent from './StepContent';

const FirstSetup = () => {
  const { listChecks } = React.useContext(AppContext);
  const [step] = useStepper(0, 1);
  const [countRef, count] = useField();
  const nextToDate = React.useCallback(() => {
    const value = parseInt(count.getValue(), 10);
    if (!isNaN(value)) {
      listChecks.saveItem({ count: value, planCount: value }, dateToSQL(new Date()));
    }
  }, [listChecks, count]);

  return (
    <Stepper step={step}>
      <StepContent title="Current count" buttons={<Button onClick={nextToDate}>Next</Button>}>
        <InputText placeholder="count" type="number" ref={countRef} />
      </StepContent>
    </Stepper>
  );
};

export default FirstSetup;
