var expect = require('chai').expect;
var dateUtils = require('../lib/date-utils');

describe('date-utils', function() {
  it('should detect Fridays', function() {
    var isWeekend = dateUtils.isWeekend(2015, 4, 24);
    expect(isWeekend).not.to.be.true;
  });

  it('should detect Saturdays', function() {
    var isWeekend = dateUtils.isWeekend(2015, 4, 25);
    expect(isWeekend).to.be.true;
  });

  it('should detect Sundays', function() {
    var isWeekend = dateUtils.isWeekend(2015, 4, 26);
    expect(isWeekend).to.be.true;
  });

  it('should not place zero before two-digit integer', function() {
    var number = dateUtils.zerofy(10);
    expect(number).to.equal('10');
  });

  it('should stringify single-digit integer', function() {
    var number = dateUtils.zerofy(9);
    expect(typeof number).to.equal('string');
  });

  it('should stringify two-digit integer', function() {
    var number = dateUtils.zerofy(10);
    expect(typeof number).to.equal('string');
  });

  /* TODO: Fix.
  it('should determine Easter Sunday in 2015', function() {
    var expectedDate = dateUtils.createDate(2015, 4, 5);
    expect(dateUtils.easterSunday(2015)).to.equal(expectedDate);
  });
  */
});
