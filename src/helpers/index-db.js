import { openDB as open } from 'idb';
import rc4 from 'crypto-js/rc4';
import encUtf8 from 'crypto-js/enc-utf8';

/**
 * @param {Object} [options]
 * @param {string} [options.nameDB = 'APP']
 * @param {number} [options.version = 1]
 * @param {Array<tables>} [options.tables = []]
 */
export const openDB = (options = {}) => {
  const { nameDB = 'APP', version = 1, tables = [] } = options;
  return open(nameDB, version, {
    upgrade: (db) => {
      const existTables = Array.from(db.objectStoreNames);
      tables.forEach((nameTable) => {
        existTables.indexOf(nameTable) === -1 && db.createObjectStore(nameTable);
      });
    },
  });
};

export const table = (connect, nameTable, defaultCryptoKey) => {
  const get = async key => (await connect).get(nameTable, key);
  const getCrypto = async (key, cryptoKey = defaultCryptoKey) => (cryptoKey ? rc4.decrypt(await get(key), cryptoKey).toString(encUtf8) : get(key));

  const set = async (key, val) => (await connect).put(nameTable, val, key);
  const setCrypto = async (key, val, cryptoKey = defaultCryptoKey) => (cryptoKey ? await set(key, rc4.encrypt(val, cryptoKey).toString()) : set(key, val));

  const remove = async key => (await connect).delete(nameTable, key);
  const clear = async () => (await connect).clear(nameTable);
  const getAllKeys = async () => (await connect).getAllKeys(nameTable);
  const getAll = async () => (await connect).getAll(nameTable);

  const getMap = async (parseDate = date => date) => {
    const keys = await (await connect).getAllKeys(nameTable);
    const result = new Map();

    for (let index = 0; index < keys.length; index += 1) {
      const key = keys[index];
      const item = await (await connect).get(nameTable, key);
      result.set(key, parseDate(item));
    }

    return result;
  };
  const getMapCrypto = async (parseDate = date => date, cryptoKey = defaultCryptoKey) => {
    if (cryptoKey) {
      const keys = await getAllKeys();
      const result = new Map();

      for (let index = 0; index < keys.length; index += 1) {
        const key = keys[index];
        try {
          const item = await getCrypto(key, cryptoKey);
          result.set(key, parseDate(item));
        } catch (e) {
          // pass
        }
      }

      return result;
    }

    return getMap(parseDate);
  };

  return {
    get,
    getCrypto,
    set,
    setCrypto,
    remove,
    clear,
    getAllKeys,
    getAll,
    getMap,
    getMapCrypto,
  };
};

export default openDB;
