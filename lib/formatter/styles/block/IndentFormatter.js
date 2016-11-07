"use strict";

const BlockStyleFormatter = require('../../../type/BlockStyleFormatter');
class IndentFormatter extends BlockStyleFormatter {}

/* STATIC FUNCTION */
IndentFormatter.format = function(op) {
	if(IndentFormatter.whitelist.indexOf(op.attributes.indent)!==-1){
		return IndentFormatter.class+"-"+op.attributes.indent;
	} else {
		return "";
	}
}

IndentFormatter.formatter = "indent";
IndentFormatter.class = "ql-indent";
IndentFormatter.whitelist =  [1, 2, 3, 4, 5, 6, 7, 8]

module.exports = IndentFormatter;
