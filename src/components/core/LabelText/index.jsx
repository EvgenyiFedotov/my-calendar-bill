import * as React from 'react';

import Styled from './styled';

/**
 * Component `LabelText`
 * @param {string} color
 */
const LabelText = ({ children, color }) => {
  return <Styled {...{ color }}>{children}</Styled>;
};

export default LabelText;
