import * as React from 'react';

/**
 * Hook for get method for work component list
 */
export default (defaultList = []) => {
  const [items, setItems] = React.useState(defaultList);
  const [item, setItem] = React.useState();
  const saveItem = React.useCallback(
    (newItemProps) => {
      setItems((prevItems) => {
        const nextItems = [...prevItems];
        const index = prevItems.indexOf(item);

        if (index === -1) {
          nextItems.push({ ...newItemProps, isNew: false });
        } else {
          nextItems[index] = { ...item, ...newItemProps, isNew: false };
        }

        return nextItems;
      });

      setItem(undefined);
    },
    [item, setItems, setItem],
  );
  const deleteItem = React.useCallback(() => {
    setItems((prevItems) => {
      const nextItems = [...prevItems];
      nextItems.splice(prevItems.indexOf(item), 1);
      return nextItems;
    });
    setItem(undefined);
  }, [item, setItems, setItem]);
  const createItem = React.useCallback(
    (defaultValues = {}) => () => setItem({ ...defaultValues, isNew: true }),
    [setItem],
  );
  const clearItem = React.useCallback(() => setItem(undefined), [setItem]);
  const editItem = React.useCallback(index => () => setItem(items[index]), [setItem, items]);

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
