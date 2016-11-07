"use strict";

const BlockFormatter = require('../../type/BlockFormatter');
class ParagraphFormatter extends BlockFormatter {}

/* STATIC FUNCTION */
ParagraphFormatter.format = function(op) {
	return '<p>'+op.insert+'</p>';
}

ParagraphFormatter.formatter = "paragraph";

module.exports = ParagraphFormatter;
