"use strict";

const EmbedFormatter = require('../../type/EmbedFormatter');
class ImageFormatter extends EmbedFormatter {}

/* STATIC FUNCTION */
ImageFormatter.format = function(op) {
	return '<img src="' + op.insert.image + '"/>';
}

ImageFormatter.formatter = "image";

module.exports  = ImageFormatter;
