finnish-holidays-js
===================

[![Build Status](https://travis-ci.org/ericnishio/finnish-holidays-js.svg?branch=master)](https://travis-ci.org/ericnishio/finnish-holidays-js)

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
```

## Tests

```
$ sudo npm install -g mocha
$ mocha
```
