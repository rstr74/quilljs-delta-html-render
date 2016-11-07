"use strict";

const InlineFormatter = require('../../type/InlineFormatter');
class SpanFormatter extends InlineFormatter {}

/* STATIC FUNCTION */
SpanFormatter.format = function(op) {
	return '<span>';
}

SpanFormatter.formatter = "span";

module.exports  = SpanFormatter;
