import * as React from 'react';
import uuid from 'uuid/v4';

/**
 * Hook for get method for work component list
 */
export default (defaultList = []) => {
  const [items, setItems] = React.useState(new Map(defaultList));
  const [item, setItem] = React.useState([]);
  const createItem = React.useCallback(
    (defaultValues = {}, key = uuid()) => () => {
      setItem([key, { ...defaultValues }]);
    },
    [setItem],
  );
  const saveItem = React.useCallback(
    (newItemProps, key) => {
      setItems((prevItems) => {
        const nextItems = new Map(prevItems);
        const normKey = key || item[0];
        nextItems.set(key || item[0], { ...nextItems.get(normKey), ...newItemProps });
        return nextItems;
      });

      setItem([]);
    },
    [item, setItems, setItem],
  );
  const deleteItem = React.useCallback(
    (key) => {
      setItems((prevItems) => {
        const nextItems = new Map(prevItems);
        const normKey = key || item[0];
        nextItems.delete(normKey);
        return nextItems;
      });
      setItem([]);
    },
    [item, setItems, setItem],
  );
  const clearItem = React.useCallback(() => setItem([]), [setItem]);
  const editItem = React.useCallback(key => () => setItem([key, items.get(key)]), [setItem, items]);

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
  };
};
