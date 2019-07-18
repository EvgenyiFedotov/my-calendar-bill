import * as React from 'react';

import { methodsTable } from 'helpers/index-db';

/**
 * @param {Promise<IndexDB>} db
 * @param {string} nameTable
 */
export default (list, db, nameTable) => {
  const { saveItem, setItems, deleteItem } = list;
  const table = React.useMemo(() => methodsTable(db, nameTable), [db, nameTable]);

  /**
   * Save item in `IndexDB`
   * @param {Object} newItemProps
   * @param {string} [key]
   */
  const saveItemIdb = React.useCallback(
    (newItemProps, key) => {
      const [normKey, normItem] = saveItem(newItemProps, key);
      return table.set(normKey, JSON.stringify(normItem));
    },
    [saveItem, table],
  );

  /**
   * Delete item in `IndexDB`
   * @param {string} [key]
   */
  const deleteItemIdb = React.useCallback(key => table.delete(deleteItem(key)), [
    deleteItem,
    table,
  ]);

  /**
   * Load items from `IndexDB`
   */
  const loadItems = React.useCallback(
    () => table
      .getMap((item) => {
        try {
          return JSON.parse(item);
        } catch (e) {
          return {};
        }
      })
      .then(items => setItems(items)),
    [table, setItems],
  );

  return {
    loadItems,
    saveItem: saveItemIdb,
    deleteItem: deleteItemIdb,
  };
};
