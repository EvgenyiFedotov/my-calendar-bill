import { openDB as open } from 'idb';
import sha3 from 'crypto-js/sha3';
import rc4 from 'crypto-js/rc4';
import encUtf8 from 'crypto-js/enc-utf8';

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

export const table = (db, nameTable) => {
  const get = async key => (await db).get(nameTable, key);
  const getCrypto = async (key, hashKey) => rc4.decrypt(get(key), hashKey).toString(encUtf8);
  const set = async (key, val) => (await db).put(nameTable, val, key);
  const setCrypto = async (key, val, hashKey) => set(key, rc4.encrypt(val, hashKey).toString());
  const remove = async key => (await db).delete(nameTable, key);
  const clear = async () => (await db).clear(nameTable);
  const getAllKeys = async () => (await db).getAllKeys(nameTable);
  const getAll = async () => (await db).getAll(nameTable);
  const getMap = async () => {
    const keys = await (await db).getAllKeys(nameTable);
    const result = new Map();

    for (let index = 0; index < keys.length; index += 1) {
      const key = keys[index];
      const item = await (await db).get(nameTable, key);
      result.set(key, item);
    }

    return result;
  };
  const getMapCrypto = async (hashKey) => {
    const keys = await (await db).getAllKeys(nameTable);
    const result = new Map();

    for (let index = 0; index < keys.length; index += 1) {
      const key = keys[index];
      const item = await (await db).getCrypto(nameTable, key, hashKey);
      result.set(key, item);
    }

    return result;
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
