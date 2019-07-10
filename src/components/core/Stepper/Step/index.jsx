import * as React from 'react';

import Styled from './styled';

const Step = ({ children, ...props }) => <Styled {...props}>{children}</Styled>;

export default Step;
