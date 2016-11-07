"use strict";

const InlineStyleFormatter = require('../../../type/InlineStyleFormatter');
class ColorFormatter extends InlineStyleFormatter {}

/* STATIC FUNCTION */
ColorFormatter.format = function(op) {
	var hexToRgb = function(hex) {
			var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
			return result ? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
			} : null;
		}
	var rgb = hexToRgb(op.attributes.color);
	return 'color: rgb(' + [rgb.r, rgb.g, rgb.b].join(", ") + ')';

}

ColorFormatter.formatter = "color";

module.exports = ColorFormatter;
