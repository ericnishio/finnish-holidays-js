var calendar = require('./lib/calendar');

// Public API
module.exports = {
  next: calendar.next,
  year: calendar.byYear,
  month: calendar.byMonth
};

var next = calendar.next(3);
var byYear = calendar.byYear(2016, true);
var byMonth = calendar.byMonth(1, 2015);

console.log(byYear);
