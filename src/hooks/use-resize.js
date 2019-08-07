import * as React from 'react';

import useSizeElement from './use-size-element';

/**
 * Hook for use window event `resize` and given ref, size main container
 * @returns {[ref, { width: number, heigth: number }, methods: Object]}
 */
export default () => {
  const [elementRef, size, { setSize, getSizeElement }] = useSizeElement();

  const resize = React.useCallback(() => setSize(getSizeElement()), [setSize, getSizeElement]);

  React.useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [resize]);

  return [elementRef, size, { setSize, getSizeElement, resize }];
};
