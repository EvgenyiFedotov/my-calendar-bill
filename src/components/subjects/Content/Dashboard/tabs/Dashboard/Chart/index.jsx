import * as React from 'react';

import useResize from 'hooks/use-resize';

import Styled from './styled';

const Chart = () => {
  const [container, size] = useResize();

  console.log(size);

  return <Styled ref={container}>Chart</Styled>;
};

export default Chart;
