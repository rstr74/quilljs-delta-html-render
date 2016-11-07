"use strict";

const InlineFormatter = require('../../type/InlineFormatter');
class LinkFormatter extends InlineFormatter {}

/* STATIC FUNCTION */
LinkFormatter.format = function(op) {
	return '<a href="' + op.attributes.link + '" target="_blank"></a>';
}

LinkFormatter.formatter = "link";

module.exports  = LinkFormatter;
