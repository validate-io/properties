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
// Returns true

props[ 2 ] = 'buzz';
console.log( hasProperties( obj, props ) );
// Returns false