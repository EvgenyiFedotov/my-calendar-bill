import * as React from 'react';

import TableContext from 'components/subjects/contexts/Tables/context';
import { getLastCheck } from 'components/subjects/Content/Dashboard/heplers';
import IconDirection from 'components/subjects/Content/Dashboard/tabs/Dashboard/IconDirection';
import { Column } from 'components/core/styled/Flex';
import { numToMoneyStr } from 'helpers/number';
import { MONTHS } from 'helpers/date';

import Count from './styled/Count';
import Box from './styled/Box';

const CurrentBalance = () => {
  const {
    maps: {
      checksBill: [checksBill],
    },
  } = React.useContext(TableContext);

  const counts = React.useMemo(() => {
    if (checksBill) {
      const lastCheck = getLastCheck(checksBill, new Date());
      if (lastCheck) {
        const [key, { count, planCount }] = lastCheck;
        return { date: new Date(key), count, planCount };
      }
    }
    return { date: new Date(), count: 0, planCount: 0 };
  }, [checksBill]);

  return (
    <Box>
      <Column alignItems="flex-end">
        <span>
          Current balance at{' '}
          <b>
            {counts.date.getDate()}th {MONTHS[counts.date.getMonth()].toLocaleLowerCase()}
          </b>
        </span>
        <Count>
          <IconDirection value={counts.count} matchValue={counts.planCount} />
          <>{numToMoneyStr(counts.count)}</>
        </Count>
      </Column>
    </Box>
  );
};

export default CurrentBalance;
