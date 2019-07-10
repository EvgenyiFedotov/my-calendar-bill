import * as React from 'react';

/**
 * Hook for create callback on key press and check `keyCode`
 * @param {number} checkKeyCode
 * @param {() => {}} callback
 */
export default (checkKeyCode, callback) => React.useCallback(
  ({ keyCode }) => {
    if (keyCode === checkKeyCode) callback();
  },
  [callback],
);
