var dateUtils = require('./date-utils');

/**
 * Year constructor.
 * @param {number} year
 */
function Year(year) {
  if (year > 0) {
    this.year = year;
    this.holidays = {};
    this.loadHolidays();
  } else {
    throw new Error('Invalid year: ' + year);
  }
}

/**
 * Loads holidays.
 */
Year.prototype.loadHolidays = function() {
  this.addHoliday(dateUtils.createDate(this.year, 1, 1), "New Year's Day");
  this.addHoliday(dateUtils.createDate(this.year, 1, 6), 'Epiphany');
  this.addHoliday(dateUtils.goodFriday(this.year), 'Good Friday');
  this.addHoliday(dateUtils.easterSunday(this.year), 'Easter Sunday');
  this.addHoliday(dateUtils.easterMonday(this.year), 'Easter Monday');
  this.addHoliday(dateUtils.createDate(this.year, 5, 1), 'May Day');
  this.addHoliday(dateUtils.ascensionDay(this.year), 'Ascension Day');
  this.addHoliday(dateUtils.pentecost(this.year), 'Pentecost');
  this.addHoliday(dateUtils.midsummerEve(this.year), 'Midsummer Eve'); // unofficial
  this.addHoliday(dateUtils.midsummerDay(this.year), 'Midsummer Day');
  this.addHoliday(dateUtils.allSaintsDay(this.year), "All Saints' Day");
  this.addHoliday(dateUtils.createDate(this.year, 12, 6), 'Independence Day');
  this.addHoliday(dateUtils.createDate(this.year, 12, 24), 'Christmas Eve'); // unofficial
  this.addHoliday(dateUtils.createDate(this.year, 12, 25), 'Christmas Day');
  this.addHoliday(dateUtils.createDate(this.year, 12, 26), "St. Stephen's Day");
};

/**
 * Discards holidays falling on a weekend.
 */
Year.prototype.discardWeekends = function() {
  var self = this;
  var holidays = {};

  Object.keys(self.holidays).forEach(function(month) {
    if (self.holidays[month].length > 0) {
      Object.keys(self.holidays[month]).forEach(function(i) {
        var holiday = self.holidays[month][i];

        if (!dateUtils.isWeekend(holiday.year, holiday.month, holiday.day)) {
          if (typeof holidays[month] === 'undefined') {
            holidays[month] = [];
          }

          holidays[month].push(holiday);
        }
      });
    }
  });

  this.holidays = holidays;
};

/**
 * Adds a holiday.
 * @param {Date} date
 * @param {string} description
 */
Year.prototype.addHoliday = function(date, description) {
  var month = dateUtils.getMonth(date);
  var year = dateUtils.getYear(date);
  var day = dateUtils.getDay(date);
  var holiday = {
    year: year,
    month: month,
    day: day,
    description: description
  };

  if (typeof this.holidays[month] === 'undefined') {
    this.holidays[month] = [];
  }

  this.holidays[month].push(holiday);
};

module.exports = {
  /**
   * Creates a new year object.
   * @param {number} year
   * @return {Year}
   */
  get: function(year) {
    return new Year(year);
  }
};
