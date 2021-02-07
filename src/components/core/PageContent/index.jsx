import * as React from 'react';

import Styled from './styled';
import Content from './styled/Content';

const PageContent = ({ children, wrapperProps, contentProps }) => (
  <Styled {...wrapperProps}>
    <Content {...contentProps}>{children}</Content>
  </Styled>
);

export default PageContent;
