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
    var nextDateConfig = {
      month: month,
      year: year
    };

    while (!nextHoliday) {
      if (nextDateConfig.month === 12) {
        nextDateConfig.month = 1;
        nextDateConfig.year += 1;
      } else {
        nextDateConfig.month += 1;
      }

      var nextHolidays = calendar.byMonth(nextDateConfig.month, nextDateConfig.year);

      if (nextHolidays[0]) {
        return nextHolidays[0];
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
  before: function(month, year, index) {}
};

module.exports = finder;
