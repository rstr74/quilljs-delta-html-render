"use strict";

const InlineFormatter = require('../../type/InlineFormatter');
class UnderlineFormatter extends InlineFormatter {}

/* STATIC FUNCTION */
UnderlineFormatter.format = function(op) {
	return '<u>';
}

UnderlineFormatter.formatter = "underline";

module.exports  = UnderlineFormatter;
