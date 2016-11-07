"use strict";

const InlineFormatter = require('../../type/InlineFormatter');
class ImageFormatter extends InlineFormatter {}

/* STATIC FUNCTION */
ImageFormatter.format = function(op) {
	return '<em>';
}

ImageFormatter.formatter = "italic";

module.exports  = ImageFormatter;
