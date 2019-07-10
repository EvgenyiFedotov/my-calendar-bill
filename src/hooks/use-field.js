import * as React from 'react';

/**
 * Get value from target input element
 */
export const getValueInputRef = ref => (ref.current ? ref.current.value : '');

/**
 * Hook for work with fields form
 * @param {Object} [options]
 * @param {(value: T) => boolean} [options.validator]
 * @param {(ref) => any} [options.getValueRef]
 */
export default (options = {}) => {
  const { validator = () => true, getValueRef = getValueInputRef } = options;

  // Ref field
  const ref = React.useRef(null);

  // State error field
  const [error, setError] = React.useState(false);

  // Get value from field
  const getValue = React.useCallback(() => getValueRef(ref), [ref, getValueRef]);

  // Set value in field (remove `error`)
  const setValue = React.useCallback(
    (value) => {
      if (ref.current) ref.current.value = value;
      setError(false);
    },
    [ref, setError],
  );

  // Validate valie field (set `error`)
  const validate = React.useCallback(() => {
    const result = validator(getValueRef(ref));
    setError(!result);
    return result;
  }, [ref, setError, validator, getValueRef]);

  return [
    ref,
    {
      error,
      getValue,
      setValue,
      validate,
    },
  ];
};
