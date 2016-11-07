"use strict";

const InlineFormatter = require('../../type/InlineFormatter');
class EBookLinkFormatter extends InlineFormatter {}

/* STATIC FUNCTION */
EBookLinkFormatter.format = function(op) {
	return '<a href="' + op.attributes.ebooklink.href + '"></a>';
}

EBookLinkFormatter.formatter = "ebooklink";

module.exports  = EBookLinkFormatter;
