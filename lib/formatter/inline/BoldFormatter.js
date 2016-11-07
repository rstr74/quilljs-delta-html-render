"use strict";

const InlineFormatter = require('../../type/InlineFormatter');
class BoldFormatter extends InlineFormatter {}

/* STATIC FUNCTION */
BoldFormatter.format = function(op) {
	return '<b>';
}

BoldFormatter.formatter = "bold";

module.exports  = BoldFormatter;
