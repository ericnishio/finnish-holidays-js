var calendar = require('./lib/calendar');

module.exports = {
  next: calendar.next,
  year: calendar.byYear,
  month: calendar.byMonth
};
