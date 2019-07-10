import * as React from 'react';

import Step from '../../../core/Stepper/Step';
import Row from '../../../styled/Row';

import Styled from './styled';

/**
 * Component `StepContent`
 * @param {string} [title]
 * @param {React.Element} [buttons]
 */
const StepContent = ({ title, children, buttons }) => (
  <Step justifyContent="flex-start" alignItems="center">
    <Styled>
      <b>{title}</b>
      {children}
      <Row justifyContent="flex-end">{buttons}</Row>
    </Styled>
  </Step>
);

export default StepContent;
