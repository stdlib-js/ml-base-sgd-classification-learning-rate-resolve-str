/** @license Apache-2.0 */

'use strict';

/**
* Return the learning rate scheduler string associated with a supported SGD classification learning rate scheduler value.
*
* @module @stdlib/ml-base-sgd-classification-learning-rate-resolve-str
*
* @example
* var str2enum = require( '@stdlib/ml-base-sgd-classification-learning-rate-str2enum' );
* var resolve = require( '@stdlib/ml-base-sgd-classification-learning-rate-resolve-str' );
*
* var v = resolve( str2enum( 'constant' ) );
* // returns 'constant'
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
