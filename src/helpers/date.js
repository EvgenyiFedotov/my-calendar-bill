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
 * Each date from -> to
 * @param {Date} from
 * @param {Date} to
 * @param {(date: Date) => void}
 * @param {{ last: boolean }} [options={ last: false }]
 */
export const eachDate = (from, to, callback, options = {}) => {
  const { last = false } = options;
  const _isPrevDate = isPrevDate(from, to);

  if (_isPrevDate || (!_isPrevDate && isEqualDate(from, to))) {
    while (!isEqualDate(from, to)) {
      callback(new Date(from));
      from.setDate(from.getDate() + 1);
    }

    if (last) {
      callback(new Date(from));
    }
  }
};

/**
 * @param {Date} date
 */
export const setLastDateMonth = (date) => {
  date.setDate(15);
  date.setMonth(date.getMonth() + 1);
  date.setDate(0);
  return date;
};

/**
 * Get last date month
 * @param {Date} date
 *
 * @returns {Date}
 */
export const getLastDateMonth = (date) => {
  const result = new Date(date);
  setLastDateMonth(result);
  return result;
};

/**
 * Get first and last (border) dates month
 * @param {Date} date
 *
 * @returns {[Date, Date]}
 */
export const getBorderMonth = (date) => {
  const begin = new Date(date);
  begin.setDate(1);
  return [begin, getLastDateMonth(date)];
};

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
  const [currDate, endDate] = getBorderMonth(date);
  const { showSixthWeek = true } = options;

  currDate.setDate(1);
  currDate.setDate(currDate.getDate() - (currDate.getDay() || 7) + 1);
  endDate.setDate(endDate.getDate() + (7 - endDate.getDay()));

  const result = [[]];
  eachDate(currDate, endDate, (dateEach) => {
    result[result.length - 1].push(new Date(dateEach));
    if (dateEach.getDay() === 0) {
      result.push([]);
    }
  });
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

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * Get month how string
 * @param {Date} date
 *
 * @returns {string}
 */
export const dateToMonth = date => MONTHS[date.getMonth()];

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

/**
 * Format date to SQL date
 * @param {Date} date
 *
 * @returns {string} Date in format `YYYY-MM-DD`
 */
export const dateToSQL = date => `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
  .getDate()
  .toString()
  .padStart(2, '0')}`;

export const DAY_WEEK_SHORT = ['Mo', 'Tu', 'We', 'Tr', 'Fr', 'Sa', 'Su'];
