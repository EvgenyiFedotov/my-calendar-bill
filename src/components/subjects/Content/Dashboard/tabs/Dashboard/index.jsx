import * as React from 'react';

import Column from 'components/core/styled/Column';
import { BlockRow } from 'components/core/styled/Block';
import LabelText from 'components/core/styled/LabelText';

const Dashboard = () => {
  return (
    <Column>
      <BlockRow>
        <span>Current count: </span>
        <LabelText>1000</LabelText>
      </BlockRow>
    </Column>
  );
};

export default Dashboard;
