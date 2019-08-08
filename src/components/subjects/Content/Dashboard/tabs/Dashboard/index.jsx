import * as React from 'react';

import Calendar from 'components/subjects/Content/Dashboard/tabs/Dashboard/Calendar';
import ChangesBill from 'components/subjects/Content/Dashboard/tabs/Dashboard/ChangesBill';
import TablesContext from 'components/subjects/contexts/Tables/context';
import Chart from 'components/subjects/Content/Dashboard/tabs/Dashboard/Chart';
import { Column } from 'components/core/styled/Flex';
import CurrentBalance from 'components/subjects/Content/Dashboard/tabs/Dashboard/CurrentBalance';
import PlanBalance from 'components/subjects/Content/Dashboard/tabs/Dashboard/PlanBalance';

import ContentRow from './styled/ContentRow';

const Dashboard = () => {
  const {
    maps: {
      changesBill: [changesBill],
    },
  } = React.useContext(TablesContext);

  return (
    <Column step={2} style={{ padding: 'var(--space)' }}>
      <ContentRow>
        <CurrentBalance />
        <PlanBalance />
      </ContentRow>

      <ContentRow>
        <Calendar />
        <Chart />
      </ContentRow>

      <ChangesBill items={changesBill} />
    </Column>
  );
};

export default Dashboard;
