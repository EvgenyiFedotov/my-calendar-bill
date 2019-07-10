import * as React from 'react';

/**
 * Hook for fast and correct use component `Stepper`
 * @param {number} [defaultStep=0]
 * @param {number} [maxStep=0]
 */
export default (defaultStep = 0, maxStep = 0) => {
  const [step, setStep] = React.useState(defaultStep);
  const next = React.useCallback(
    () => setStep((prevStep) => {
      let nextStep = prevStep + 1;
      if (nextStep > maxStep) {
        nextStep = maxStep;
      }
      return nextStep;
    }),
    [setStep, maxStep],
  );
  const prev = React.useCallback(
    () => setStep((prevStep) => {
      let nextStep = prevStep - 1;
      if (nextStep < 0) {
        nextStep = 0;
      }
      return nextStep;
    }),
    [setStep],
  );

  return [step, { next, prev, setStep }];
};
