import * as React from 'react';

import Calendar from 'components/subjects/Content/Dashboard/tabs/Dashboard/Calendar';
import ChangesBill from 'components/subjects/Content/Dashboard/tabs/Dashboard/ChangesBill';
import TablesContext from 'components/subjects/contexts/Tables/context';
import Chart from 'components/subjects/Content/Dashboard/tabs/Dashboard/Chart';
import { Column, Row } from 'components/core/styled/FlexBlock';
import CurrentBalance from 'components/subjects/Content/Dashboard/tabs/Dashboard/CurrentBalance';

const Dashboard = () => {
  const {
    maps: {
      changesBill: [changesBill],
    },
  } = React.useContext(TablesContext);

  return (
    <Column marginStep={2}>
      <Row marginStep={0} alignItems="center" style={{ flexWrap: 'wrap' }}>
        <CurrentBalance />
      </Row>
      <Row marginStep={0} justifyContent="center" style={{ flexWrap: 'wrap' }}>
        <Calendar />
        <Chart />
      </Row>
      <ChangesBill items={changesBill} />
    </Column>
  );
};

export default Dashboard;
