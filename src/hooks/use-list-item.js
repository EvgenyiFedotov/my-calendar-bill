import * as React from 'react';
import uuid from 'uuid/v4';

/**
 * @param {list<Map>}
 */
export default ([list, setList]) => {
  const [item, setItem] = React.useState([]);

  const createItem = React.useCallback(
    (key = () => uuid(), defaultValues = {}) => (...args) => {
      setItem([key(...args), { ...defaultValues }]);
    },
    [setItem],
  );

  /**
   * Save current item in indexDB
   * @param {Object} newItemProps
   * @param {string} [key]
   * @param {boolean} [inDB = true]
   *
   * @returns {[key, item]}
   */
  const saveItem = React.useCallback(
    (newItemProps, key = item[0]) => {
      const nextItems = new Map(list);
      const newItem = { ...nextItems.get(key), ...newItemProps };

      nextItems.set(key, newItem);
      setList(nextItems);
      setItem([]);

      return [key, newItem];
    },
    [list, item, setList, setItem],
  );

  /**
   * Delete item
   * @param {string} [key = item[0]]
   *
   * @returns {string} key
   */
  const deleteItem = React.useCallback(
    (key = item[0]) => {
      setList((prevItems) => {
        const nextItems = new Map(prevItems);
        nextItems.delete(key);
        return nextItems;
      });
      setItem([]);
      return key;
    },
    [item, setList, setItem],
  );

  const clearItem = React.useCallback(() => setItem([]), [setItem]);
  const editItem = React.useCallback(key => () => setItem([key, list.get(key)]), [setItem, list]);
  const getItemProp = React.useCallback(nameProps => !!item[1] && item[1][nameProps], [item]);
  const isNew = React.useCallback(() => list.has(item[0]), [list, item]);

  return {
    item,
    setItem,
    createItem,
    saveItem,
    deleteItem,
    clearItem,
    editItem,
    getItemProp,
    isNew,
  };
};
