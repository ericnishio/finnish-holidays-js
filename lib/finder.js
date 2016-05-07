var calendar = require('./calendar');

var finder = {
  /**
   * @param {number} month
   * @param {number} year
   * @param {number} index
   * @return {Object}
   */
  after: function(month, year, index) {
    var currentHolidays = calendar.byMonth(month, year);
    var nextIndex = index + 1;

    if (currentHolidays[nextIndex]) {
      return currentHolidays[nextIndex];
    }

    var nextHoliday;
    var nextDate = {
      month: month,
      year: year
    };

    while (!nextHoliday) {
      if (nextDate.month === 12) {
        nextDate.month = 1;
        nextDate.year += 1;
      } else {
        nextDate.month += 1;
      }

      var nextHolidays = calendar.byMonth(nextDate.month, nextDate.year);

      if (nextHolidays[0]) {
        nextHoliday = nextHolidays[0];
      }
    }

    return nextHoliday;
  },

  /**
   * @param {number} month
   * @param {number} year
   * @param {number} index
   * @return {Object}
   */
  before: function(month, year, index) {
    var currentHolidays = calendar.byMonth(month, year);
    var previousIndex = index - 1;

    if (currentHolidays[previousIndex]) {
      return currentHolidays[previousIndex];
    }

    var previousHoliday;
    var previousDate = {
      month: month,
      year: year
    };

    while (!previousHoliday) {
      if (previousDate.month === 1) {
        previousDate.month = 12;
        previousDate.year -= 1;
      } else {
        previousDate.month -= 1;
      }

      var previousHolidays = calendar.byMonth(previousDate.month, previousDate.year);

      if (previousHolidays[0]) {
        previousHoliday = previousHolidays[0];
      }
    }

    return previousHoliday;
  }
};

module.exports = finder;
