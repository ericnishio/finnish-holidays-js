finnish-holidays-js
===================

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

A library for listing Finnish national holidays. Based on the [finnish-holidays](https://github.com/ericnishio/finnish-holidays)
Ruby gem.

## Setup

```
$ npm install finnish-holidays-js --save
```

## Usage

```javascript
var holidays = require('finnish-holidays-js');

holidays.next();
holidays.year(2015);
holidays.month(6, 2015);
holidays.translate('Midsummer Eve', 'fi');
holidays.after(12, 2016, 0);
holidays.before(12, 2016, 1);
```

## Tests

```
$ npm install -g mocha
$ npm test
```

## License

MIT © [Eric Nishio](http://ericnish.io)

[npm-url]: https://npmjs.org/package/finnish-holidays-js
[npm-image]: https://img.shields.io/npm/v/finnish-holidays-js.svg?style=flat-square

[travis-url]: https://travis-ci.org/ericnishio/finnish-holidays-js
[travis-image]: https://img.shields.io/travis/ericnishio/finnish-holidays-js.svg?style=flat-square
