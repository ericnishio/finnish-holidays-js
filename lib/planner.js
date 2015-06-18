var calendar = require('./calendar');

module.exports = {
  /**
   * Plans optimal days for.
   * @param {number} year
   * @param {number} numberOfHolidays
   * @return {Object}
   */
  optimize: function(year, numberOfHolidays) {
    if (!numberOfHolidays) {
      throw new Error('Number of holidays must be specified.');
    }

    var holidays = this.getFiscalHolidays(year);

    console.log(JSON.stringify(holidays));
  },

  /**
   * Returns holidays for the given fiscal year.
   * @param {number} year
   * @return {Object}
   */
  getFiscalHolidays: function(year) {
    var holidays = {};

    [4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3].forEach(function(month) {
      if (month === 1) {
        year = year += 1;
      }

      if (typeof holidays[year] === 'undefined') {
        holidays[year] = {};
      }

      if (typeof holidays[year][month] === 'undefined') {
        holidays[year][month] = {};
      }

      holidays[year][month] = calendar.byMonth(month, year);
    });

    return holidays;
  }
};
