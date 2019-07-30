import * as React from 'react';

/**
 * Hook for correct use table `indexDB` and state with `Map`
 * @param {ReturnUseIndexDB.table[index]} tableDB
 */
export default (tableDB) => {
  const [table, setTable] = React.useState(null);

  // Load data from `indexDB`
  React.useEffect(() => {
    tableDB
      .getMapCrypto((item) => {
        try {
          return JSON.parse(item);
        } catch (e) {
          return item;
        }
      })
      .then(result => setTable(result));
  }, [tableDB]);

  return [table, setTable];
};
