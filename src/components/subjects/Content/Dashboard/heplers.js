import { dateToSQL, isPrevDate, isEqualDate } from 'helpers/date';

/**
 * @param {Map<[string, Object]>} changesBill
 * @param {Date} [dateMonth]
 */
export const getChangesBillByDate = (changesBill, dateMonth) => {
  const result = new Map();

  changesBill
    && Array.from(changesBill).forEach(([key, changeBill]) => {
      const date = new Date(changeBill.date);
      if (dateMonth) {
        date.setFullYear(dateMonth.getFullYear());
        date.setMonth(dateMonth.getMonth());
      }
      const dateSQL = dateToSQL(date);

      if (!result.get(dateSQL)) result.set(dateSQL, new Map());
      result.get(dateSQL).set(key, changeBill);
    });

  return result;
};

/**
 * @param {Map<[string, Object]>} changesBill
 */
export const getChangesBillByDirection = (changesBill) => {
  const result = {
    in: new Map(),
    out: new Map(),
    zero: new Map(),
  };

  changesBill
    && Array.from(changesBill).forEach(([key, changeBill]) => {
      const { count } = changeBill;
      if (count < 0) {
        result.out.set(key, changeBill);
      } else if (count > 0) {
        result.in.set(key, changeBill);
      } else {
        result.zero.set(key, changeBill);
      }
    });

  return result;
};

/**
 * Get last check
 * @param {checkList} checksList
 * @param {Date} date
 *
 * @returns {[string, check]}
 */
export const getLastCheck = (checksList, date) => {
  const keys = Array.from(checksList.keys()).sort((a, b) => (a < b ? -1 : 1));
  let result = null;

  for (let index = 0; index < keys.length; index += 1) {
    const key = keys[index];
    const item = checksList.get(key);

    if (typeof item.count === 'number' && typeof item.planCount === 'number') {
      const dateKey = new Date(key);
      if (date && !isPrevDate(dateKey, date) && !isEqualDate(dateKey, date)) break;
      result = [key, item];
    }
  }

  return result;
};
