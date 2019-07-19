import {
  isEqualDate, isPrevDate, dateToSQL, eachDate,
} from 'helpers/date';

/**
 * Get changes bill for month
 * @param {Date} date
 *
 * @returns {Map<[string, changeBill]>}
 */
export const getChangesBillMonth = (changesBill, date) => {
  const result = new Map();
  const getDateMonth = (changeBill, getMonth = date => date.getMonth()) => {
    const dateMonth = new Date(changeBill.date);
    dateMonth.setFullYear(date.getFullYear());
    dateMonth.setMonth(getMonth(dateMonth));
    return dateMonth;
  };
  const add = ([keyChangeBill, changeBill], getMonth) => {
    const dateMonth = getDateMonth(changeBill, getMonth);
    const dateSQL = dateToSQL(dateMonth);
    if (!result.has(dateSQL)) result.set(dateSQL, new Map());
    result.get(dateSQL).set(keyChangeBill, changeBill);
  };

  Array.from(changesBill).forEach((changeBill) => {
    if (changeBill[1].type === 'repeat') {
      add(changeBill);

      // Prev month
      add(changeBill, date => date.getMonth() - 1);

      // Next month
      add(changeBill, date => date.getMonth() + 1);
    } else if (
      changeBill[1].type === 'once'
      && isEqualDate(getDateMonth(changeBill[1]), new Date(changeBill[1].date))
    ) {
      add(changeBill);
    }
  });

  return result;
};

/**
 * Get changes bill by direction
 * @param {Map} changesBill
 */
export const getChangesByDirection = (changesBill) => {
  const result = {
    in: new Map(),
    out: new Map(),
    zero: new Map(),
    summCount: 0,
  };

  if (changesBill) {
    Array.from(changesBill).forEach(([keyChangeBill, changeBill]) => {
      if (changeBill.count > 0) {
        result.in.set(keyChangeBill, changeBill);
        result.summCount += changeBill.count;
      } else if (changeBill.count < 0) {
        result.out.set(keyChangeBill, changeBill);
        result.summCount += changeBill.count;
      } else {
        result.zero.set(keyChangeBill, changeBill);
      }
    });
  }

  return result;
};

/**
 * Get last check
 * @param {checkList} checkList
 * @param {Date} date
 *
 * @returns {[string, check]}
 */
export const getLastCheck = ({ items }, date) => {
  const keys = Array.from(items.keys()).sort((a, b) => (a < b ? -1 : 1));
  let result = null;

  for (let index = 0; index < keys.length; index += 1) {
    const key = keys[index];
    const item = items.get(key);

    if (typeof item.count === 'number' && typeof item.planCount === 'number') {
      const dateKey = new Date(key);
      if (date && !isPrevDate(dateKey, date) && !isEqualDate(dateKey, date)) break;
      result = { key, item };
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
export const getPlanCount = (checkList, changesBill, date) => {
  const lastCheck = getLastCheck(date);

  if (lastCheck) {
    const {
      key,
      item: { count },
    } = lastCheck;
    let result = count;

    eachDate(
      new Date(key),
      date,
      (date) => {
        result += getChangesByDirection(getChangesBillMonth(changesBill, date).get(dateToSQL(date)))
          .summCount;
      },
      { last: true },
    );

    return result;
  }

  return null;
};
