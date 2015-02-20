Properties
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value has specific properties.


## Installation

``` bash
$ npm install validate.io-properties
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var hasProperties = require( 'validate.io-properties' );
```

#### hasProperties( obj, props )

Validates if a `value` has specific properties.

``` javascript
var obj = {'a': 0},
	props = ['a'];

var bool = hasProperties( obj, props );
```


## Notes

* 	This method first validates that the input `value` is an `object` and returns `false` for any `value` types which are not JavaScript `objects`. 
*	This method does __not__ climb the prototype chain.
* 	The property list should be an `array`.
*	The method returns `false` as soon as an unrecognized property is found.


## Examples

``` javascript
var obj = {
	'beep': true,
	'boop': false,
	'baz': 'foo',
	'bap': 'bar'
};

var props = [
	'beep',
	'bap'
];

console.log( hasProperties( obj, props ) );
// returns true

props.push( 'buzz' );
console.log( hasProperties( obj, props ) );
// returns false
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-properties.svg
[npm-url]: https://npmjs.org/package/validate.io-properties

[travis-image]: http://img.shields.io/travis/validate-io/properties/master.svg
[travis-url]: https://travis-ci.org/validate-io/properties

[coveralls-image]: https://img.shields.io/coveralls/validate-io/properties/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/properties?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/properties.svg
[dependencies-url]: https://david-dm.org/validate-io/properties

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/properties.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/properties

[github-issues-image]: http://img.shields.io/github/issues/validate-io/properties.svg
[github-issues-url]: https://github.com/validate-io/properties/issues
