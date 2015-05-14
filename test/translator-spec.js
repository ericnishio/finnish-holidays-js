var expect = require('chai').expect;
var translator = require('../lib/translator');

describe('translator', function() {
  it('should translate into Finnish', function() {
    expect(translator.translate('Midsummer Eve', 'fi')).to.eql('Juhannusaatto');
  });

  it('should translate into Swedish', function() {
    expect(translator.translate("St. Stephen's Day", 'sv')).to.eql('Andra juldagen');
  });

  it('should ignore an invalid language and revert to English', function() {
    expect(translator.translate('May Day', 'zh')).to.eql('May Day');
  });

  it('should ignore an invalid holiday', function() {
    expect(translator.translate("Satan's Birthday", 'fi')).to.eql("Satan's Birthday");
  });
});
