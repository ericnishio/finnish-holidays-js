var expect = require('chai').expect;
var finder = require('../lib/finder');

describe('finder', function() {
  it('should find next holiday', function() {
    var nextHoliday = finder.after(12, 2016, 0);

    expect(nextHoliday).to.eql({
      day: 26,
      description: "St. Stephen's Day",
      month: 12,
      year: 2016
    });
  });
});
