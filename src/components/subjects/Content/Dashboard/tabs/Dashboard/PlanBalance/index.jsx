import * as React from 'react';

import { Column } from 'components/core/styled/Flex';
import { getPlanCount } from 'components/subjects/Content/Dashboard/heplers';
import TablesContext from 'components/subjects/contexts/Tables/context';
import { numToMoneyStr } from 'helpers/number';

import Styled from './styled';
import Count from './styled/Count';

const PlanBalance = () => {
  const {
    maps: {
      changesBill: [changesBill],
      checksBill: [checksBill],
    },
  } = React.useContext(TablesContext);

  const value = React.useMemo(
    () =>
      changesBill && checksBill
        ? numToMoneyStr(getPlanCount({ changesBill, checksBill, date: new Date() }).summ)
        : 0,
    [changesBill, checksBill],
  );

  return (
    <Styled>
      <Column alignItems="flex-end">
        <span>
          Plan balance at <b>today</b>
        </span>
        <Count>{value}</Count>
      </Column>
    </Styled>
  );
};

export default PlanBalance;
