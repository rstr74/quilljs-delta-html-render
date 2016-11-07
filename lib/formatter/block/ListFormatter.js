"use strict";

const BlockFormatter = require('../../type/BlockFormatter');
class ListFormatter extends BlockFormatter {}

/* STATIC FUNCTION */
ListFormatter.line = function(op) {
	return '<li>'+op.insert+'</li>';
}
ListFormatter.group = function(op) {
    return '<'+ListFormatter.tags[op.attributes.list]+'>';
}

ListFormatter.formatter = "list";

ListFormatter.tags = {ordered:"ol",bullet:"ul"}
module.exports = ListFormatter;

