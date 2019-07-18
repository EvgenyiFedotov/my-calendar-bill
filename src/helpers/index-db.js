import { openDB as open } from 'idb';

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

export const methodsTable = (db, nameTable) => ({
  async get(key) {
    return (await db).get(nameTable, key);
  },
  async set(key, val) {
    return (await db).put(nameTable, val, key);
  },
  async delete(key) {
    return (await db).delete(nameTable, key);
  },
  async clear() {
    return (await db).clear(nameTable);
  },
  async getAllKeys() {
    return (await db).getAllKeys(nameTable);
  },
  async getAll() {
    return (await db).getAll(nameTable);
  },
  async getMap(parseItem = item => item) {
    const keys = await (await db).getAllKeys(nameTable);
    const result = new Map();

    for (let index = 0; index < keys.length; index += 1) {
      const key = keys[index];
      const item = await (await db).get(nameTable, key);
      result.set(key, parseItem(item));
    }

    return result;
  },
});
