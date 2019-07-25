import * as React from 'react';

import Styled from './styled';
import Content from './styled/Content';

const PageContent = ({ children, ...props }) => (
  <Styled>
    <Content {...props}>{children}</Content>
  </Styled>
);

export default PageContent;
