/**
*
*	VALIDATE: properties
*
*
*	DESCRIPTION:
*		- Validates if a value has specific properties.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isObject = require( 'validate.io-object' );


// HASPROPERTIES //

/**
* FUNCTION: hasProperties( value, properties )
*	Validates if a value has specific properties.
*
* @param {Object} value - value to be validated
* @param {Array} properties - property list
* @returns {Boolean} boolean indicating whether value has desired properties
*/
function hasProperties( value, properties ) {
	if ( !isObject( value ) ) {
		return false;
	}
	// Check for each property, exiting at the first property which is not found...
	for ( var i = 0; i < properties.length; i++ ) {
		if ( !value.hasOwnProperty( properties[i] ) ) {
			return false;
		}
	}
	return true;
} // end FUNCTION hasProperties()


// EXPORTS //

module.exports = hasProperties;
