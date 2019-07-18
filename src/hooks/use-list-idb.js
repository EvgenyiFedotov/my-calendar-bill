import * as React from 'react';

import { methodsTable } from 'helpers/index-db';

import useList from './use-list';

/**
 * @param {Promise<IndexDB>} db
 * @param {string} nameTable
 * @param {Object} [options = {}]
 * @param {(item: Object) => any} [options.stringifyItem]
 * @param {(item: Object) => any} [options.parseItem]
 */
export default (list, db, nameTable, options = {}) => {
  const { saveItem, setItems, deleteItem } = list;
  const { stringifyItem, parseItem } = options;
  const table = React.useMemo(() => methodsTable(db, nameTable), [db, nameTable]);

  /**
   * Save item in `IndexDB`
   * @param {Object} newItemProps
   * @param {string} [key]
   */
  const saveItemIdb = React.useCallback(
    (newItemProps, key) => {
      const [normKey, normItem] = saveItem(newItemProps, key);
      return table.set(normKey, stringifyItem ? stringifyItem(normItem) : JSON.stringify(normItem));
    },
    [saveItem, table, stringifyItem],
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
      .getMap(item => (parseItem ? parseItem(item) : JSON.parse(item)))
      .then(items => setItems(items)),
    [table, setItems, parseItem],
  );

  return {
    loadItems,
    saveItem: saveItemIdb,
    deleteItem: deleteItemIdb,
  };
};
