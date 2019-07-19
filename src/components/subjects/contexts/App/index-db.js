import { openDB, table } from 'helpers/index-db';

const db = openDB({
  tables: ['changesBill', 'checkList'],
  version: 3,
});

export const changesBillTable = table(db, 'changesBill');
export const checkListTable = table(db, 'checkList');
