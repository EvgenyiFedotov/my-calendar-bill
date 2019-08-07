import * as React from 'react';

export default () => {
  const elementRef = React.useRef();
  const [size, setSize] = React.useState({ width: 0, height: 0 });

  const getSizeElement = React.useCallback(() => {
    const element = elementRef.current;
    if (element) return { width: element.clientWidth, height: element.clientHeight };
    return { width: 0, height: 0 };
  }, [elementRef]);

  React.useEffect(() => {
    setSize(getSizeElement());
  }, [setSize, getSizeElement]);

  return [elementRef, size, { setSize, getSizeElement }];
};
