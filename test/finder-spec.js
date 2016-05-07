var expect = require('chai').expect;
var finder = require('../lib/finder');

describe('finder', function() {
  it('should find next holiday', function() {
    var nextHoliday = finder.after(6, 2016, 0);

    expect(nextHoliday).to.eql({
      description: 'Independence Day',
      day: 6,
      month: 12,
      year: 2016
    });
  });

  it('should find another next holiday', function() {
    var nextHoliday = finder.after(12, 2016, 0);

    expect(nextHoliday).to.eql({
      description: "St. Stephen's Day",
      day: 26,
      month: 12,
      year: 2016
    });
  });

  it('should find previous holiday', function() {
    var nextHoliday = finder.before(12, 2016, 0);

    expect(nextHoliday).to.eql({
      description: 'Midsummer Eve',
      day: 24,
      month: 6,
      year: 2016
    });
  });

  it('should find another previous holiday', function() {
    var nextHoliday = finder.before(12, 2016, 1);

    expect(nextHoliday).to.eql({
      description: 'Independence Day',
      day: 6,
      month: 12,
      year: 2016
    });
  });
});
