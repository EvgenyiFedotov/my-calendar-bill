import * as React from 'react';

import openDB, { table } from 'helpers/index-db';
import useTableToMap from 'hooks/use-table-to-map';

import Context from './context';

const config = {
  tables: ['changesBill', 'checksBill'],
};

const Tables = ({ children }) => {
  const connect = React.useMemo(() => openDB(config), []);
  const tables = React.useMemo(
    () => ({
      changesBill: table(connect, 'changesBill'),
      checksBill: table(connect, 'checksBill'),
    }),
    [connect],
  );
  const changesBill = useTableToMap(tables.changesBill);
  const checksBill = useTableToMap(tables.checksBill);

  return (
    <Context.Provider
      value={{
        maps: {
          changesBill,
          checksBill,
        },
        tables,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Tables;
