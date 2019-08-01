import * as React from 'react';

import Column from 'components/core/styled/Column';
import Calendar from 'components/subjects/Content/Dashboard/tabs/Dashboard/Calendar';
import ChangesBill from 'components/subjects/Content/Dashboard/tabs/Dashboard/ChangesBill';
import TablesContext from 'components/subjects/contexts/Tables/context';

const Dashboard = () => {
  const {
    maps: {
      changesBill: [changesBill],
    },
  } = React.useContext(TablesContext);

  return (
    <Column>
      <Calendar />
      <ChangesBill items={changesBill} />
    </Column>
  );
};

export default Dashboard;
