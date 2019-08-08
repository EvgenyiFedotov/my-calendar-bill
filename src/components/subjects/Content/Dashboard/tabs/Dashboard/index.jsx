import * as React from 'react';

import Calendar from 'components/subjects/Content/Dashboard/tabs/Dashboard/Calendar';
import ChangesBill from 'components/subjects/Content/Dashboard/tabs/Dashboard/ChangesBill';
import TablesContext from 'components/subjects/contexts/Tables/context';
import Chart from 'components/subjects/Content/Dashboard/tabs/Dashboard/Chart';
import { Column, Row } from 'components/core/styled/Flex';
import CurrentBalance from 'components/subjects/Content/Dashboard/tabs/Dashboard/CurrentBalance';
import PlanBalance from 'components/subjects/Content/Dashboard/tabs/Dashboard/PlanBalance';

const Dashboard = () => {
  const {
    maps: {
      changesBill: [changesBill],
    },
  } = React.useContext(TablesContext);

  return (
    <Column step={2}>
      <Row step={2} justifyContent="center" style={{ flexWrap: 'wrap' }}>
        <CurrentBalance />
        <PlanBalance />
      </Row>

      <Row step={2} justifyContent="center" style={{ flexWrap: 'wrap' }}>
        <Calendar />
        <Chart />
      </Row>

      <ChangesBill items={changesBill} />
    </Column>
  );
};

export default Dashboard;
