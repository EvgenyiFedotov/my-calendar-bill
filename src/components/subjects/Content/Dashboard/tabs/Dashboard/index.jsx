import * as React from 'react';

import Column from 'components/core/styled/Column';
import SelectedDateContext from 'components/subjects/contexts/SelectedDate';
import Calendar from 'components/subjects/Content/Dashboard/tabs/Dashboard/Calendar';

const Dashboard = () => {
  return (
    <Column>
      <SelectedDateContext>
        <Calendar />
      </SelectedDateContext>
    </Column>
  );
};

export default Dashboard;
