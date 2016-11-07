"use strict";

const BlockStyleFormatter = require('../../../type/BlockStyleFormatter');
class AlignFormatter extends BlockStyleFormatter {}

/* STATIC FUNCTION */
AlignFormatter.format = function(op) {
	if(AlignFormatter.whitelist.indexOf(op.attributes.align)!==-1){
		return AlignFormatter.class+"-"+op.attributes.align;
	} else {
		return "";
	}
}

/* STATIC FUNCTION */
AlignFormatter.style = function(op) {
	return "text-align:"+op.attributes.align;
}

AlignFormatter.formatter = "align";
AlignFormatter.class = "ql-align";
AlignFormatter.style = "text-align";
AlignFormatter.whitelist= ['right', 'center', 'justify'];

module.exports = AlignFormatter;
