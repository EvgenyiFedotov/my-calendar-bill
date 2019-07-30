import * as React from 'react';

import Column from 'components/core/styled/Column';
import SelectedDateContext from 'components/subjects/contexts/SelectedDate';
import Calendar from 'components/subjects/Content/Dashboard/tabs/Dashboard/Calendar';
import TablesContext from 'components/subjects/contexts/Tables';
import ChangesBill from 'components/subjects/Content/Dashboard/tabs/Dashboard/ChangesBill';
import ChecksBill from 'components/subjects/Content/Dashboard/tabs/Dashboard/ChecksBill';

const Dashboard = () => {
  return (
    <SelectedDateContext>
      <TablesContext>
        <Column>
          <Calendar />
          <ChangesBill />
          <ChecksBill />
        </Column>
      </TablesContext>
    </SelectedDateContext>
  );
};

export default Dashboard;
