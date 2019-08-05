import * as React from 'react';

/**
 * Hook for use window event `resize` and given ref, size main container
 * @returns {[ref, { width: number, heigth: number }, methods: Object]}
 */
export default () => {
  const elementRef = React.useRef();
  const [size, setSize] = React.useState({ width: 0, height: 0 });

  const getSizeElement = React.useCallback(() => {
    const element = elementRef.current;
    if (element) return { width: element.clientWidth, height: element.clientHeight };
    return { width: 0, height: 0 };
  }, [elementRef]);

  const resize = React.useCallback(() => setSize(getSizeElement()), [setSize, getSizeElement]);

  React.useEffect(() => {
    setSize(getSizeElement());
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [setSize, getSizeElement, resize]);

  return [elementRef, size, { setSize, getSizeElement, resize }];
};
