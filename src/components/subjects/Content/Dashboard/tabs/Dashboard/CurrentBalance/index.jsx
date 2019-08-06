import * as React from 'react';

import Box from 'components/core/styled/Box';
import TableContext from 'components/subjects/contexts/Tables/context';
import { getLastCheck } from 'components/subjects/Content/Dashboard/heplers';
import IconDirection from 'components/subjects/Content/Dashboard/tabs/Dashboard/IconDirection';

import Count from './styled/Count';

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
        const [, { count, planCount }] = lastCheck;
        return { count, planCount };
      }
    }
    return { count: 0, planCount: 0 };
  }, [checksBill]);

  return (
    <Box
      step={2}
      paddingSpaceStep={[4, 8]}
      widthStep={7}
      minWidthStep={7}
      justifyContent="center"
      alignItems="center"
    >
      <span>Current balance</span>
      <Count>
        <IconDirection value={counts.count} matchValue={counts.planCount} />
        <>{counts.count}</>
      </Count>
    </Box>
  );
};

export default CurrentBalance;