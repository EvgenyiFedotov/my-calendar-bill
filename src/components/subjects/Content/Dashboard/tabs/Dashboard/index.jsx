import * as React from 'react';

import Column from 'components/core/styled/Column';
import Calendar from 'components/subjects/Content/Dashboard/tabs/Dashboard/Calendar';
import ChangesBill from 'components/subjects/Content/Dashboard/tabs/Dashboard/ChangesBill';
import TablesContext from 'components/subjects/contexts/Tables/context';
import Chart from 'components/subjects/Content/Dashboard/tabs/Dashboard/Chart';
import Row from 'components/core/styled/Row';

const Dashboard = () => {
  const {
    maps: {
      changesBill: [changesBill],
    },
  } = React.useContext(TablesContext);

  return (
    <Column>
      <Row step={2} justifyContent="center" style={{ flexWrap: 'wrap' }}>
        <Calendar />
        <Chart />
      </Row>
      <ChangesBill items={changesBill} />
    </Column>
  );
};

export default Dashboard;
