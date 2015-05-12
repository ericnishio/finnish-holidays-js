var expect = require('chai').expect;
var dateUtils = require('../lib/date-utils');

describe('date-utils', function() {
  it('should detect Saturday', function() {
    var isWeekend = dateUtils.isWeekend(2015, 4, 25);
    expect(isWeekend).to.be.true;
  });
});
