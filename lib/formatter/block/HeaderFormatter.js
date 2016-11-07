"use strict";

const BlockFormatter = require('../../type/BlockFormatter');
class HeaderFormatter extends BlockFormatter {}

/* STATIC FUNCTION */
HeaderFormatter.format = function(op) {
	var tag = HeaderFormatter.tags[op.attributes.header-1];
	return '<'+tag+'>'+op.insert+'</'+tag+'>';
}

HeaderFormatter.formatter = "header";
HeaderFormatter.tags = ["h1","h2","h3","h4","h5"];

module.exports = HeaderFormatter;
