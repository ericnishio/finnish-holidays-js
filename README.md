finnish-holidays-js
===================

A library for listing Finnish national holidays. Based on the [finnish-holidays](https://github.com/ericnishio/finnish-holidays)
Ruby gem.

## Setup

```
npm install finnish-holidays-js --save
```

## Usage

```
var holidays = require('finnish-holidays');

holidays.next();
holidays.year(2015);
holidays.month(6, 2015);
```
