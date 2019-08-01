import * as React from 'react';

import Column from 'components/core/styled/Column';
import Calendar from 'components/subjects/Content/Dashboard/tabs/Dashboard/Calendar';
import ChangesBill from 'components/subjects/Content/Dashboard/tabs/Dashboard/ChangesBill';

const Dashboard = () => {
  return (
    <Column>
      <Calendar />
      <ChangesBill />
    </Column>
  );
};

export default Dashboard;
