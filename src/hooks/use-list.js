import * as React from 'react';
import uuid from 'uuid/v4';

/**
 * Hook for get method for work component list
 */
export default (defaultList = []) => {
  const [items, setItems] = React.useState(new Map(defaultList));
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
      const nextItems = new Map(items);
      const newItem = { ...nextItems.get(key), ...newItemProps };

      nextItems.set(key, newItem);
      setItems(nextItems);
      setItem([]);

      return [key, newItem];
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
