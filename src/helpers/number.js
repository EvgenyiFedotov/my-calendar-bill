const reverseStr = value => value
  .split('')
  .reverse()
  .join('');

/**
 * @param {number} value
 * @returns {string}
 */
export const numToMoneyStr = value => reverseStr(value.toString())
  .match(/\d{0,3}/g)
  .filter(Boolean)
  .map(str => reverseStr(str))
  .reverse()
  .join(',');
