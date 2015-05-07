var calendar = require('./lib/calendar');

module.exports = {
  next: function(count, includeWeekends) {
    return calendar.next(count, includeWeekends);
  },
  year: function(year, includeWeekends) {
    return calendar.byYear(year, includeWeekends);
  },
  month: function(month, year, includeWeekends) {
    return calendar.byMonth(month, year, includeWeekends);
  }
};
