"use strict";

const EmbedFormatter = require('../../type/EmbedFormatter');
class FormulaFormatter extends EmbedFormatter {}

/* STATIC FUNCTION */
FormulaFormatter.format = function(op) {
	return '<formula/>';
}

FormulaFormatter.formatter = "formula";

module.exports = FormulaFormatter;
