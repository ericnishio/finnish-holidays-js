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
    expect(number).to.eql('10');
  });

  it('should stringify single-digit integer', function() {
    var number = dateUtils.zerofy(9);
    expect(typeof number).to.eql('string');
  });

  it('should stringify two-digit integer', function() {
    var number = dateUtils.zerofy(10);
    expect(typeof number).to.eql('string');
  });

  it('should create a range array', function() {
    var range = dateUtils.range(0, 10);
    expect(range).to.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should determine Easter Sunday in 2015', function() {
    var expectedDate = dateUtils.createDate(2015, 4, 5);
    expect(dateUtils.easterSunday(2015)).to.eql(expectedDate);
  });

  it('should determine Easter Monday in 2016', function() {
    var expectedDate = dateUtils.createDate(2016, 3, 28);
    expect(dateUtils.easterMonday(2016)).to.eql(expectedDate);
  });

  it('should determine Good Friday in 2017', function() {
    var expectedDate = dateUtils.createDate(2017, 4, 14);
    expect(dateUtils.goodFriday(2017)).to.eql(expectedDate);
  });

  it('should determine Ascension Day in 2018', function() {
    var expectedDate = dateUtils.createDate(2018, 5, 10);
    expect(dateUtils.ascensionDay(2018)).to.eql(expectedDate);
  });

  it('should determine Pentecost in 2019', function() {
    var expectedDate = dateUtils.createDate(2019, 6, 9);
    expect(dateUtils.pentecost(2019)).to.eql(expectedDate);
  });

  it('should determine Midsummer Eve in 2020', function() {
    var expectedDate = dateUtils.createDate(2020, 6, 19);
    expect(dateUtils.midsummerEve(2020)).to.eql(expectedDate);
  });

  it('should determine Midsummer Day in 2021', function() {
    var expectedDate = dateUtils.createDate(2021, 6, 26);
    expect(dateUtils.midsummerDay(2021)).to.eql(expectedDate);
  });

  it("should determine All Saints' Day in 2022", function() {
    var expectedDate = dateUtils.createDate(2022, 11, 5);
    expect(dateUtils.allSaintsDay(2022)).to.eql(expectedDate);
  });
});
