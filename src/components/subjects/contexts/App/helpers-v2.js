import { dateToSQL, isPrevDate, isEqualDate } from 'helpers/date';

export const eachChangesBill = (changesBill, cb = () => {}) => {
  const arrChangesBill = Array.from(changesBill);
  const len = arrChangesBill.length;

  for (let index = 0; index < len; index += 1) {
    const result = cb(arrChangesBill[index], index, len);
    if (result === false) break;
  }
};

/**
 * Get changes bill for month
 * @param {changeBill} changeBill
 * @param {Date} date
 *
 * @returns {Map<[string, changeBill]>}
 */
export const getChangesBillMonth = (changesBill, date) => {
  const result = new Map();

  /**
   * @param {Date} date
   * @param {changeBill} [key, changeBill]
   */
  const add = (date, [key, changeBill]) => {
    const dateSQL = dateToSQL(date);
    if (!result.has(dateSQL)) result.set(dateSQL, new Map());
    result.get(dateSQL).set(key, changeBill);
  };

  const addRepeat = ([key, changeBill]) => {
    const dateChangeBill = new Date(changeBill.date);
    dateChangeBill.setFullYear(date.getFullYear());

    dateChangeBill.setMonth(date.getMonth() - 1);
    add(dateChangeBill, [key, changeBill]);

    dateChangeBill.setMonth(date.getMonth());
    add(dateChangeBill, [key, changeBill]);

    dateChangeBill.setMonth(date.getMonth() + 1);
    add(dateChangeBill, [key, changeBill]);
  };

  eachChangesBill(changesBill, ([key, changeBill]) => {
    switch (changeBill.type) {
      case 'repeat':
        addRepeat([key, changeBill]);
      default:
        break;
    }
  });

  return result;
};

export const summChangesBill = (changesBill) => {
  let result = 0;
  eachChangesBill(changesBill, ([, { count }]) => {
    result += count;
  });
  return result;
};

/**
 * Get last check
 * @param {checkList} checkList
 * @param {Date} date
 *
 * @returns {[string, check]}
 */
export const getLastCheck = (checkList, date) => {
  const keys = Array.from(checkList.keys()).sort((a, b) => (a < b ? -1 : 1));
  let result = null;

  for (let index = 0; index < keys.length; index += 1) {
    const key = keys[index];
    const item = checkList.get(key);

    if (typeof item.count === 'number' && typeof item.planCount === 'number') {
      const dateKey = new Date(key);
      if (date && !isPrevDate(dateKey, date) && !isEqualDate(dateKey, date)) break;
      result = [key, item];
    }
  }

  return result;
};

/**
 * Get plan count
 * @param {checkList} checkList
 * @param {changesBill} changesBill
 * @param {Date} date
 *
 * @returns {number}
 */
export const getPlanCount = ({ checkList, changesBill, date }) => {
  const lastCheck = getLastCheck(checkList, date);

  if (lastCheck) {
    const [key, { count }] = lastCheck;
    const result = count;
    const currDate = new Date(key);

    // while (isPrevDate(currDate, date)) {}
  }

  return null;
};
