import * as React from 'react';

import Column from 'components/core/styled/Column';
import Calendar from 'components/subjects/Content/Dashboard/tabs/Dashboard/Calendar';
import ChangesBill from 'components/subjects/Content/Dashboard/tabs/Dashboard/ChangesBill';
import ChecksBill from 'components/subjects/Content/Dashboard/tabs/Dashboard/ChecksBill';

const Dashboard = () => {
  return (
    <Column>
      <Calendar />
      <ChangesBill />
      <ChecksBill />
    </Column>
  );
};

export default Dashboard;
