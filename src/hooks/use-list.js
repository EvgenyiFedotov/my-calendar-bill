import * as React from 'react';
import uuid from 'uuid/v4';

/**
 * Hook for get method for work component list
 */
export default (defaultList = []) => {
  const [items, setItems] = React.useState(new Map(defaultList));
  const [item, setItem] = React.useState([]);
  const createItem = React.useCallback(
    (defaultValues = {}, key = () => uuid()) => () => {
      setItem([key(), { ...defaultValues }]);
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
    (newItemProps, key) => {
      const nextItems = new Map(items);
      const normKey = key || item[0];
      const normItem = { ...nextItems.get(normKey), ...newItemProps };

      nextItems.set(normKey, normItem);
      setItems(nextItems);
      setItem([]);

      return [normKey, normItem];
    },
    [items, item, setItems, setItem],
  );

  /**
   * Delete item
   * @param {string} [key = item[0]]
   *
   * @returns {string} key
   */
  const deleteItem = React.useCallback(
    (key = item[0]) => {
      setItems((prevItems) => {
        const nextItems = new Map(prevItems);
        nextItems.delete(key);
        return nextItems;
      });
      setItem([]);
      return key;
    },
    [item, setItems, setItem],
  );

  const clearItem = React.useCallback(() => setItem([]), [setItem]);
  const editItem = React.useCallback(key => () => setItem([key, items.get(key)]), [setItem, items]);
  const getItemProp = React.useCallback(nameProps => !!item[1] && item[1][nameProps], [item]);

  return {
    items,
    saveItem,
    setItems,
    item,
    setItem,
    createItem,
    deleteItem,
    clearItem,
    editItem,
    getItemProp,
  };
};
