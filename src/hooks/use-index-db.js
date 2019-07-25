import * as React from 'react';

import { openDB, table } from 'helpers/index-db';

/**
 * Hook for correct use `indexDB`
 * @param {Object} [options]
 * @param {string} [options.nameDB = 'APP']
 * @param {number} [options.version = 1]
 * @param {Array<string>} [options.tables = []]
 * @param {Array<string>} [options.tablesAlises = []]
 * @param {CryptoKey} [options.cryptoKey]
 */
export default (options = {}) => React.useMemo(() => {
  const { tables = [], tablesAlises = [], cryptoKey } = options;
  const connect = openDB(options);
  const tablesDB = tables.reduce(
    (res, nameTable, index) => ({
      ...res,
      [tablesAlises[index] || index]: table(connect, nameTable, cryptoKey),
    }),
    {},
  );

  return { connect, tables: tablesDB };
}, [options]);
