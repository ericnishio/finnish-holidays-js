var calendar = require('./lib/calendar');
var finder = require('./lib/finder');
var translator = require('./lib/translator');

var FinnishHolidays = {
  next: function(count, includeWeekends) {
    return calendar.next(count, includeWeekends);
  },
  year: function(year, includeWeekends) {
    return calendar.byYear(year, includeWeekends);
  },
  month: function(month, year, includeWeekends) {
    return calendar.byMonth(month, year, includeWeekends);
  },
  translate: function(english, language) {
    return translator.translate(english, language);
  },
  after: function(month, year, index) {
    return finder.after(month, year, index);
  },
  before: function(month, year, index) {
    return finder.before(month, year, index);
  }
};

module.exports = FinnishHolidays;
