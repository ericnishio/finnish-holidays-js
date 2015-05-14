var calendar = require('./lib/calendar');
var translator = require('./lib/translator');

module.exports = {
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
  }
};
