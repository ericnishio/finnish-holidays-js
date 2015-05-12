var expect = require('chai').expect;
var FinnishHolidays = require('../index');

describe('index', function() {
  it('should return non-weekend holidays in 2015', function() {
    var holidays = FinnishHolidays.year(2015);
    expect(holidays.length).to.equal(9);
  });

  it('should return all holidays in 2015', function() {
    var holidays = FinnishHolidays.year(2015, true);
    expect(holidays.length).to.equal(15);
  });

  it('year should return valid holiday object', function() {
    var holidays = FinnishHolidays.year(2016, true);
    var testedHoliday = holidays[0];

    var expectedHoliday = {
      year: 2016,
      month: 1,
      day: 1,
      description: "New Year's Day"
    };

    expect(testedHoliday.year).to.equal(expectedHoliday.year);
    expect(testedHoliday.month).to.equal(expectedHoliday.month);
    expect(testedHoliday.day).to.equal(expectedHoliday.day);
    expect(testedHoliday.description).to.equal(expectedHoliday.description);
  });

  it('month should return valid holiday object', function() {
    var holidays = FinnishHolidays.month(12, 2015, true);
    var testedHoliday = holidays[0];

    var expectedHoliday = {
      year: 2015,
      month: 12,
      day: 6,
      description: 'Independence Day'
    };

    expect(testedHoliday.year).to.equal(expectedHoliday.year);
    expect(testedHoliday.month).to.equal(expectedHoliday.month);
    expect(testedHoliday.day).to.equal(expectedHoliday.day);
    expect(testedHoliday.description).to.equal(expectedHoliday.description);
  });
});
