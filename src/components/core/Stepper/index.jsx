import * as React from 'react';

import Styled from './styled';
import StepsWrapper from './styled/StepsWrapper';

/**
 * Component `Stepper`
 * @param {number} [step=0]
 * @param {React.Element} [topPanel]
 * @param {React.Element} [bottomPanel]
 */
const Stepper = ({ step = 0, topPanel, bottomPanel, children, ...props }) => {
  const arrChildren = React.useMemo(() => React.Children.toArray(children), [children]);

  return (
    <Styled {...props}>
      {topPanel}
      <StepsWrapper step={step}>
        {arrChildren.map(element => React.cloneElement(element, { ...element.props }))}
      </StepsWrapper>
      {bottomPanel}
    </Styled>
  );
};

export default Stepper;
