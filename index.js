var dateUtils = require('./lib/date-utils');
var calendar = require('./lib/calendar');

calendar.initialize();
var next = calendar.next(2);
console.log(next);
