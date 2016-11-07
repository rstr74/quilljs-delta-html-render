"use strict";

const InlineFormatter = require('../../type/InlineFormatter');
class StrikeFormatter extends InlineFormatter {}

/* STATIC FUNCTION */
StrikeFormatter.format = function(op) {
	return '<s>';
}

StrikeFormatter.formatter = "strike";

module.exports  = StrikeFormatter;
