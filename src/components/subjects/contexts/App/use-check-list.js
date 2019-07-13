import * as React from 'react';

import useList from '../../../../hooks/use-list';
import { dateToSQL } from '../../../../helpers/date';

export default () => {
  const checkList = useList([
    [dateToSQL(new Date('2019-07-10')), { count: 2000, planCount: 2000 }],
    [dateToSQL(new Date('2019-07-15')), { count: 1000, planCount: 2000 }],
    [dateToSQL(new Date('2019-07-19')), { count: 3000, planCount: 2000 }],
    [dateToSQL(new Date('2019-07-25')), { count: null, planCount: 2000 }],
  ]);

  /**
   * Get first check
   *
   * @returns {[string, check]}
   */
  const firstCheck = React.useMemo(() => Array.from(checkList.items)[0], [checkList.items]);

  return { ...checkList, firstCheck };
};
