module.exports = {
  FRIDAY: 5,
  SATURDAY: 6,
  SUNDAY: 0,

  /**
   * Creates a date.
   * @param {number} year
   * @param {number} month
   * @param {number} day
   * @return {Date}
   */
  createDate: function(year, month, day) {
    var date = new Date(Date.UTC(year, month - 1, day));
    return date;
  },

  /**
   * Returns today's date.
   * @return {Date}
   */
  today: function() {
    return new Date();
  },

  /**
   * Returns a year from a date object.
   * @param {Date} date
   * @return {number}
   */
  getYear: function(date) {
    return date.getFullYear();
  },

  /**
   * Returns a month from a date object.
   * @param {Date} date
   * @return {number}
   */
  getMonth: function(date) {
    return date.getMonth() + 1;
  },

  /**
   * Returns a day from a date object.
   * @param {Date} date
   * @return {number}
   */
  getDay: function(date) {
    return date.getDate();
  },

  /**
   * Returns the day of the week.
   * @param {Date} date
   * @return {number}
   */
  getDayOfWeek: function(date) {
    return date.getDay();
  },

  /**
   * Adds the given number of days to a date.
   * @param {Date} date
   * @param {number} days number of days
   * @return {Date}
   */
  addDays: function(date, days) {
    return new Date(date.setDate(date.getDate() + days));
  },

  /**
   * Subtracts the given number of days from a date.
   * @param {Date} date
   * @param {number} days number of days
   * @return {Date}
   */
  subtractDays: function(date, days) {
    return new Date(date.setDate(date.getDate() - days));
  },

  /**
   * Checks if a date falls on a weekend.
   * @param {number} year
   * @param {number} month
   * @param {number} day
   * @return {boolean}
   */
  isWeekend: function(year, month, day) {
    var dayOfWeek = this.createDate(year, month, day).getDay();
    return dayOfWeek === this.SATURDAY || dayOfWeek === this.SUNDAY;
  },

  /**
   * Determines the date of Easter Sunday.
   * @param {number} year
   * @return {Date}
   */
  easterSunday: function(year) {
    var a = year % 19;
    var b = Math.floor(year / 100);
    var c = year % 100;
    var d = Math.floor(b / 4);
    var e = b % 4;
    var f = Math.floor((b + 8) / 25);
    var g = Math.floor((b - f + 1) / 3);
    var h = (19 * a + b - d - g + 15) % 30;
    var i = Math.floor(c / 4);
    var k = c % 4;
    var l = (32 + 2 * e + 2 * i - h - k) % 7;
    var m = Math.floor((a + 11 * h + 22 * l) / 451);
    var n0 = (h + l + 7 * m + 114);
    var n = Math.floor(n0 / 31) - 1;
    var p = n0 % 31 + 1;
    var date = this.createDate(year, n + 1, p);
    return date;
  },

  /**
   * Determines the date of Easter Monday.
   * Day after Easter Sunday
   * @param {number} year
   * @return {Date}
   */
  easterMonday: function(year) {
    var date = this.easterSunday(year);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var d = date.getDate() + 1;
    return this.createDate(y, m, d);
  },

  /**
   * Determines the date of Good Friday.
   * Friday before Easter Sunday
   * @param {number} year
   * @return {Date}
   */
  goodFriday: function(year) {
    var self = this;
    var date = this.easterSunday(year);
    var dayOfWeek = null;

    function resolveFriday() {
      if (dayOfWeek === self.FRIDAY) {
        return date;
      } else {
        date = self.subtractDays(date, 1);
        dayOfWeek = self.getDayOfWeek(date);
        return resolveFriday();
      }
    }

    return resolveFriday();
  },

  /**
   * Determines the date of Ascension Day.
   * 39 days after Easter Sunday
   * @param {number} year
   * @return {Date}
   */
  ascensionDay: function(year) {
    var easterSunday = this.easterSunday(year);
    return this.addDays(easterSunday, 39);
  },

  /**
   * Determines the date of Pentecost.
   * 49 days after Easter Sunday
   * @param {number} year
   * @return {Date}
   */
  pentecost: function(year) {
    var easterSunday = this.easterSunday(year);
    return this.addDays(easterSunday, 49);
  },

  /**
   * Determines the date of Midsummer Eve.
   * Friday between June 19-25
   * @param {number} year
   * @return {Date}
   */
  midsummerEve: function(year) {
    var self = this;
    var month = 6;
    var midsummerEve;

    self.range(19, 26).forEach(function(day) {
      if (!midsummerEve) {
        var date = self.createDate(year, month, day);
        var dayOfWeek = self.getDayOfWeek(date);

        if (dayOfWeek === self.FRIDAY) {
          midsummerEve = date;
        }
      }
    });

    return midsummerEve;
  },

  /**
   * Determines the date of Midsummer Day.
   * Saturday between June 20-26
   * @param {number} year
   * @return {Date}
   */
  midsummerDay: function(year) {
    var self = this;
    var month = 6;
    var midsummerDay;

    self.range(20, 26).forEach(function(day) {
      if (!midsummerDay) {
        var date = self.createDate(year, month, day);
        var dayOfWeek = self.getDayOfWeek(date);

        if (dayOfWeek === self.SATURDAY) {
          midsummerDay = date;
        }
      }
    });

    return midsummerDay;
  },

  /**
   * Determines the date of All Saints' Day.
   * Saturday between October 31 and November 6
   * @param {number} year
   * @return {Date}
   */
  allSaintsDay: function(year) {
    var self = this;
    var october31 = self.createDate(year, 10, 31);
    var secondMonth = 11;
    var allSaintsDay;

    if (self.getDayOfWeek(october31) === self.SATURDAY) {
      allSaintsDay = october31;
    } else {
      self.range(1, 6).forEach(function(day) {
        if (!allSaintsDay) {
          var date = self.createDate(year, secondMonth, day);
          var dayOfWeek = self.getDayOfWeek(date);

          if (dayOfWeek === self.SATURDAY) {
            allSaintsDay = date;
          }
        }
      });
    }

    return allSaintsDay;
  },

  /**
   * Adds a leading zero to a single-digit number.
   * @param {number} num
   * @return {string}
   */
  zerofy: function(num) {
    num = parseInt(num);

    if (num < 10) {
      num = '0' + num;
    } else {
      num = num.toString();
    }

    return num;
  },

  /**
   * Creates an array of a range of numbers.
   * @param {number} fromNumber
   * @param {number} toNumber
   * @return {Array}
   */
  range: function(fromNumber, toNumber) {
    if (typeof fromNumber === 'undefined' || typeof toNumber === 'undefined') {
      throw new Error('Invalid range.');
    }

    var arr = [];

    for (var i = fromNumber; i <= toNumber; i++) {
      arr.push(i);
    }

    return arr;
  }
};
