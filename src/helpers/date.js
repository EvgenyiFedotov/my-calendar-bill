/**
 * Get value equal dates
 * @param {Date} date1
 * @param {Date} date2
 *
 * @returns {boolean}
 */
export const isEqualDate = (date1, date2) => date1.getFullYear() === date2.getFullYear()
  && date1.getMonth() === date2.getMonth()
  && date1.getDate() === date2.getDate();

/**
 * Get dates month by weeks
 *
 * @param {number} [date=new Date()]
 * @param {Object} [options={}]
 * @param {boolean} [options.showSixthWeek = true]
 *
 * @returns {Array<Array<Date>>};
 */
export const getDatesMonths = (date = new Date(), options = {}) => {
  const currDate = new Date(date);
  const endDate = new Date(date);
  const { showSixthWeek = true } = options;

  currDate.setDate(1);
  currDate.setDate(currDate.getDate() - (currDate.getDay() || 7) + 1);
  endDate.setMonth(endDate.getMonth() + 1);
  endDate.setDate(-1);
  endDate.setDate(endDate.getDate() + (7 - endDate.getDay()));

  const result = [[]];
  while (!isEqualDate(currDate, endDate)) {
    result[result.length - 1].push(new Date(currDate));
    currDate.setDate(currDate.getDate() + 1);
    if (currDate.getDay() === 1) {
      result.push([]);
    }
  }
  result[result.length - 1].push(new Date(currDate));

  if (result.length === 5 && (showSixthWeek || (!showSixthWeek && isEqualMonth(date, currDate)))) {
    result.push([]);
    for (let index = 0; index < 7; index += 1) {
      currDate.setDate(currDate.getDate() + 1);
      result[result.length - 1].push(new Date(currDate));
    }
  }

  return result;
};

/**
 * Get value is equal month
 * @param {Date} currDate
 * @param {Date} date
 *
 * @returns {boolean}
 */
export const isEqualMonth = (currDate, date) => currDate.getFullYear() === date.getFullYear() && currDate.getMonth() === date.getMonth();

/**
 * Get value is holiday date
 * @param {Date} date
 *
 * @returns {boolean}
 */
export const isHoliday = (date) => {
  const day = date.getDay();
  return day === 0 || day === 6;
};

/**
 * Get short name month with date
 * @param {Date} date
 *
 * @returns {string}
 */
export const MONTHS_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
export const dateToShortMonth = date => `${MONTHS_SHORT[date.getMonth()]}`;

/**
 * Get value is prev date
 * @param {Date} date1
 * @param {Date} date2
 *
 * @returns {boolean}
 */
export const isPrevDate = (date1, date2) => date1.getFullYear() < date2.getFullYear()
  || (date1.getFullYear() === date2.getFullYear() && date1.getMonth() < date2.getMonth())
  || (date1.getFullYear() === date2.getFullYear()
    && date1.getMonth() === date2.getMonth()
    && date1.getDate() < date2.getDate());
