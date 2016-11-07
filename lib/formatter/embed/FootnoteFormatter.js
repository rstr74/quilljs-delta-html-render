"use strict";

const EmbedFormatter = require('../../type/EmbedFormatter');
class FootnoteFormatter extends EmbedFormatter {}

/* STATIC FUNCTION */
FootnoteFormatter.format = function(op) {
	return '<a id="fn-orig-' + op.attributes["data-uuid"] + '" href="#fn-' + op.attributes["data-uuid"] + '">' + op.attributes["data-count"] + '</a>';
}

FootnoteFormatter.footnote = function(op) {
	return '<a id="fn-' + op.attributes["data-uuid"] + '" href="#fn-orig-' + op.attributes["data-uuid"] + '">' + op.attributes["data-count"] + '</a>' + '<p>' + op.insert.footnote + '</p>';
}

FootnoteFormatter.formatter = "footnote";

module.exports = FootnoteFormatter;
