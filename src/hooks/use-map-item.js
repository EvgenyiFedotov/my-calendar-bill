import * as React from 'react';
import uuid from 'uuid/v4';

/**
 * @param {map<Map>}
 * @param {ReturnUseIndexDB.table[index]} [tableDB]
 */
export default ([map, setMap], tableDB) => {
  const [data, setData] = React.useState([]);

  const create = React.useCallback(
    (key = () => uuid(), defaultValues = {}) => (...args) => {
      const nextData = [key(...args), { ...defaultValues }];
      setData(nextData);
      return nextData;
    },
    [setData],
  );

  /**
   * Save current item in indexDB
   * @param {Object} props
   * @param {string} [key]
   *
   * @returns {[key, item]}
   */
  const save = React.useCallback(
    (props, key = data[0]) => {
      const nextMap = new Map(map);
      const mapItem = { ...nextMap.get(key), ...props };

      nextMap.set(key, mapItem);
      setMap(nextMap);
      setData([]);

      if (tableDB) tableDB.setCrypto(key, JSON.stringify(mapItem));

      return [key, mapItem];
    },
    [map, data, setMap, setData, tableDB],
  );

  /**
   * Delete item
   * @param {string} [key = data[0]]
   *
   * @returns {string} key
   */
  const remove = React.useCallback(
    (key = [0]) => {
      setMap((prevMap) => {
        const nextMap = new Map(prevMap);
        nextMap.delete(key);
        return nextMap;
      });
      setData([]);
      return key;
    },
    [setMap, setData],
  );

  const clear = React.useCallback(() => setData([]), [setData]);
  const edit = React.useCallback(key => () => setData([key, map.get(key)]), [setData, map]);
  const getProp = React.useCallback(nameProps => !!data[1] && data[1][nameProps], [data]);
  const isNew = React.useCallback(() => map.has(data[0]), [map, data]);

  return {
    data,
    setData,
    create,
    save,
    remove,
    clear,
    edit,
    getProp,
    isNew,
  };
};
