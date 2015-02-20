'use strict';

var hasProperties = require( './../lib' );

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