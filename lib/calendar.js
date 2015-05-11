var dateUtils = require('./date-utils');
var year = require('./year');

var calendar = {
  MAX_HOLIDAYS: 100,

  /**
   * Returns the next holidays.
   * @param {number} [count] number of holidays to list (default: 3)
   * @param {boolean} [includeWeekends] include holidays falling on a weekend (default: false)
   * @return {Array}
   */
  next: function(count, includeWeekends) {
    initialize();

    count = count || 3;
    includeWeekends = includeWeekends || false;

    var self = this;
    var holidays = [];

    if (count > self.MAX_HOLIDAYS) {
      throw Error('Cannot request more than {MAX_HOLIDAYS} holidays at once.'.replace('{MAX HOLIDAYS}', self.MAX_HOLIDAYS));
    }

    /**
     * Collects holidays.
     */
    function collectHolidays() {
      if (typeof self.year.holidays[self.m] !== 'undefined' && typeof self.year.holidays[self.m] !== 'undefined') {
        self.year.holidays[self.m].forEach(function(holiday) {
          if (holidays.length < count && holiday.day >= self.d) {
            holidays.push(holiday);
          }
        });
      }
    }

    while (holidays.length < count) {
      if (!includeWeekends) {
        self.year.discardWeekends();
      }

      collectHolidays();

      if (holidays.length < count) {
        nextMonth();
      }
    }

    return holidays;
  },

  /**
   * Returns holidays by year.
   * @param {number} year
   * @param {boolean} [includeWeekends] include holidays falling on a weekend (default: false)
   * @return {Array}
   */
  byYear: function(year, includeWeekends) {
    initialize(year);

    includeWeekends = includeWeekends || false;

    var self = this;
    var holidays = [];

    if (!includeWeekends) {
      self.year.discardWeekends();
    }

    Object.keys(self.year.holidays).forEach(function(month) {
      self.year.holidays[month].forEach(function(holiday) {
        holidays.push(holiday);
      });
    });

    return holidays;
  },

  /**
   * Returns holidays by month and year.
   * @param {number} month
   * @param {number} year
   * @param {boolean} [includeWeekends] include holidays falling on a weekend (default: false)
   */
  byMonth: function(month, year, includeWeekends) {
    initialize(year, month);

    includeWeekends = includeWeekends || false;

    if (!month || !year) {
      throw Error('Month or year missing.');
    }

    var self = this;
    var holidays = [];

    if (!includeWeekends) {
      self.year.discardWeekends();
    }

    if (typeof self.year.holidays[month] !== 'undefined') {
      self.year.holidays[month].forEach(function(holiday) {
        holidays.push(holiday);
      });
    }

    return holidays;
  }
};

/**
 * Initializes the calendar.
 * @param {number} [y] year (default: this year)
 * @param {number} [m] month (default: this month)
 * @param {number} [d] day (default: this day)
 * @private
 */
function initialize(y, m, d) {
  var today = dateUtils.today();
  var thisDay = dateUtils.getDay(today);
  var thisMonth = dateUtils.getMonth(today);
  var thisYear = dateUtils.getYear(today);

  calendar.y = y || thisYear;
  calendar.m = m || thisMonth;
  calendar.d = d || thisDay;

  calendar.year = year.get(calendar.y);
}

/**
 * Goes to the next month.
 * @private
 */
function nextMonth() {
  if (calendar.m === 12) {
    calendar.m = 1;
    calendar.y += 1;
    calendar.d = 1;
  } else {
    calendar.m += 1;
    calendar.d = 1;
  }

  calendar.year = year.get(calendar.y);
}

module.exports = calendar;
