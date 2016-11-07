"use strict";

const InlineStyleFormatter = require('../../../type/InlineStyleFormatter');
class BackgroundFormatter extends InlineStyleFormatter {}

/* STATIC FUNCTION */
BackgroundFormatter.format = function(op) {
	var hexToRgb = function(hex) {
			var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
			return result ? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16)
			} : null;
		}
		//rgb(204, 204, 204)
	var rgb = hexToRgb(op.attributes.background);
	return 'background-color: rgb(' + [rgb.r, rgb.g, rgb.b].join(", ") + ')';
}

BackgroundFormatter.formatter = "background";

module.exports = BackgroundFormatter;
