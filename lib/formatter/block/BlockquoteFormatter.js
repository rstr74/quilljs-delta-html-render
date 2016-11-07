"use strict";

const BlockFormatter = require('../../type/BlockFormatter');
class BlockquoteFormatter extends BlockFormatter {}

/* STATIC FUNCTION */
BlockquoteFormatter.format = function(op) {
	return '<blockquote>'+op.insert+'</blockquote>';
}

BlockquoteFormatter.formatter = "blockquote";

module.exports = BlockquoteFormatter;

