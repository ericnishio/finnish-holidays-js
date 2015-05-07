var dateUtils = require('./lib/date-utils');
var calendar = require('./lib/calendar');

var next = calendar.next(3);
var byYear = calendar.byYear(2015);
var byMonth = calendar.byMonth(1, 2015);
//console.log(byYear);
console.log(byMonth);
